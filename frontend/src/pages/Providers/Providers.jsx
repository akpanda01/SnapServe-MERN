import ProviderCard from "../../components/Providers/ProviderCard"
import Testimonial from "../../components/Testimonial/Testimonial"
import {providers} from './../../assets/data/providers'

const Providers = () => {
  return (
  <>
    <section className="bg-[#ccfcfc]">
      <div className="container text-center">
        <h2 className="heading">Find a Helper</h2>
        <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0a4d4d23] rounded-full flex items-center justify-between">
          <input
            type="search"
            className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
            placeholder="Search Helper"
          />
          <button className="btn mt-0  rounded-full">
            Search
          </button>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          {providers.map(providers => (
            <ProviderCard key={providers.id} provider={providers} />
          ))}
        </div>
      </div>
    </section>

    <section>
        <div className="container">
          <Testimonial/>
        </div>
      </section>
  </>
  )
}

export default Providers