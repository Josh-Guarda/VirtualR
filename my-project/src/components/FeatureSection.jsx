import {features} from "../assets/constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-neutral-800 min-h-200">
        <div className="text-center">
            <span className="bg-netural-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
                Feature
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">Easily build 
                <span className="bg-linear-to-r from-orange-500 to-red-800 bg-clip-text text-transparent ">{" "}your code</span>
            </h2>
        </div>

        <div className="mt-10 flex flex-wrap lg:mt-20">
            {features.map((feature, index) => (
                <div
                key={index}
                className="w-full px-4 pb-10 sm:w-1/2 lg:w-1/3"
                >
                <div className="flex flex-col items-center text-center">
                    <div className="flex size-14 items-center justify-center rounded-full bg-neutral-800 p-3 text-orange-700">
                        {feature.icon}
                    </div>

                    <div>
                        <h5 className="mb-4 mt-4 text-xl">
                            {feature.text}
                        </h5>

                        <p>
                            {feature.description}
                        </p>
                    </div>
                </div>
            </div>
            ))}
        </div> 
    </div>
    )
}

export default FeatureSection