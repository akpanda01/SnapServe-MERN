import Provider from "../models/ProviderSchema.js";

export const updateProvider = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedProvider = await Provider.findByIdAndUpdate(
      id,
      { $set: req.body }, 
      { new: true }       
    );

    res
      .status(200)
      .json({
        success: true,
        message: "Successfully updated",
        data: updatedProvider,  
      });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to update" });
  }
};

export const deleteProvider = async (req, res) => {
  const id = req.params.id; 

  try {
    await Provider.findByIdAndDelete(id); 

    res
      .status(200)
      .json({
        success: true,
        message: "Successfully deleted",
      });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to delete" });
  }
};

export const getSingleProvider = async (req, res) => {
  const id = req.params.id; 

  try {
    const provider = await Provider.findById(id); 

    res.status(200).json({
      success: true,
      message: "Provider found", 
      data: provider, 
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "No provider found" });  
  }
};

export const getAllProvider = async (req, res) => {
  const { query } = req.query;
  
  try {
    let providers;

    if (query) {
      providers = await Provider.find({
        status: "approved", 
        $or: [
          { name: { $regex: query, $options: "i" } },
          { serviceType: { $regex: query, $options: "i" } }, 
        ],
      }).select("-password");
    } else {
      providers = await Provider.find({ status: "approved" }).select("-password");
    }

    res.status(200).json({
      success: true,
      message: "Providers found",
      data: providers,
    });
  } catch (err) {
    res.status(500).json({ 
      success: false,
      message: "Failed to fetch providers",
      error: err.message  
    });
  }
};