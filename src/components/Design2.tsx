// components/Design1.tsx
import Image from "next/image";

const Design1 = () => {
  const coreCourses = [
    {
      title: "Programming Fundamentals",
      image: "/des1.jpg", // Correct path
    },
    {
      title: "Web2 Using NextJS",
      image: "/des2.jpg", // Correct path
    },
    {
      title: "Earn as You Learn",
      image: "/des3.jpg", // Correct path
    },
  ];

  const advancedCourses = [
    {
      title: "Artificial Intelligence",
      image: "/des4.jpg", // Correct path
    },
    {
      title: "Web 3 and Metaverse",
      image: "/des5.jpg", // Correct path
    },
    {
      title: "Cloud-Native Computing",
      image: "/des6.jpg", // Correct path
    },
    {
      title: "Ambient Computing and IoT",
      image: "/des7.jpg", // Correct path
    },
    {
      title: "Genomics and Bioinformatics",
      image: "/des8.jpg", // Correct path
    },
    {
      title: "Network Programmability and Automation",
      image: "/des9.jpg", // Correct path
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Core Courses Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">
          Core Courses Sequence
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreCourses.map((course, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md"
            >
              <Image
                src={course.image}
                alt={course.title}
                width={400}
                height={300}
                className="w-full h-auto rounded-md mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-center">{course.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Advanced Courses Section */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">
          Advanced Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advancedCourses.map((course, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md"
            >
              <Image
                src={course.image}
                alt={course.title}
                width={400}
                height={300}
                className="w-full h-auto rounded-md mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-center">{course.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Design1;
