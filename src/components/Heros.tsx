import Image from 'next/image';

export default function Hero1() {
  return (
    <section className=" mt-32 relative bg-cover bg-center" style={{ backgroundImage: "url('/governor-house-03.jpg')" }}>
      {/* White overlay with increased opacity */}
      <div className="absolute inset-0 bg-white opacity-80"></div> {/* Increased opacity for a more white background */}

      {/* Content Section */}
      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center px-6">
        {/* Left Text Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-6 text-gray-800">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900">
            Governor Sindh<br />
            Kamran Khan Tessori
          </h2>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-600">
            Certified Cloud Applied Generative AI Engineer (GenEng)
          </h1>
          <p className="text-2xl font-semibold text-gray-900">
            Earn up to $5,000/month.
          </p>
          <p className="text-2xl text-gray-900">
            Now admissions are open in <br/>
            Hyderabad
          </p>
          
          {/* Apply Now and Accepted Applications in One Line */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-500 shadow-lg">
              Apply Now
            </button>
            <div className="bg-blue-100 rounded-lg px-4 py-2 shadow-md flex items-center">
              <p className="text-xl font-extrabold text-blue-600">562,143</p>
              <span className="text-lg text-gray-700 ml-2">Accepted Applications</span>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className=" md:w-1/2 mt-6 md:mt-0 flex justify-center md:justify-end">
          <Image
            src="/Governor.png"
            alt="Hero Section Image"
            width={1000}
            height={1000}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
