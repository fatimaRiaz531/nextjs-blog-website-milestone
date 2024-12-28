import Image from 'next/image';

export default function About() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-32 bg-gray-100 dark:bg-gray-700 ">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0 ">
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src="/images/logo.jpg"
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h1>
              <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
                Hello! I'm Fatima, a passionate and dedicated IT enthusiast. Over the past 8 months, I've embarked on an exciting journey of learning and creating in the field of technology. Starting with the basics of HTML and CSS, I quickly advanced to mastering Tailwind, TypeScript, JavaScript, and am currently diving into the world of Next.js.
              </p>
              <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
                Throughout this journey, I've built various projects, including responsive websites, interactive games, and dynamic web applications, applying the skills I've gained. This hands-on experience has not only enhanced my technical knowledge but also developed my problem-solving abilities and creativity.
              </p>
              <p className="text-gray-600 dark:text-gray-50 text-lg">
                I'm excited to continue exploring, learning, and sharing my experiences in the world of programming. Join me as I grow and contribute to the ever-evolving tech community!
              </p>
            </div>

          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">The Journey of Fatima in IT</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">
              From a determined beginner to a skilled developer,This is how Fatima conquered challenges and excelled in the field of IT.
            </p>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <Image
                  src="/images/1pic.jpg"
                  alt="Fatima starting her journey"
                  className="w-full h-auto rounded-lg shadow-lg"
                  width={500}
                  height={300}
                />

              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">The Beginning of a Dream</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  The journey of Fatima in IT started with a spark of curiosity and a strong desire to create. Despite not having a technical background, she dived into learning HTML and CSS, spending countless hours understanding the basics and building her first simple projects. This determination laid the foundation for her career.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <Image
                  src="/images/2pic.jpg"
                  alt="Fatima learning new technologies"
                  className="w-full h-auto rounded-lg shadow-lg"
                  width={400}
                  height={300}
                />
              </div>

              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Facing Challenges Head-On</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  Moving beyond the basics, Fatima explored advanced technologies like Tailwind CSS, JavaScript, and TypeScript. She faced many challenges—limited resources, long study hours, and self-doubt—but her resilience kept her going. Her hard work paid off as she started creating impressive projects, including responsive websites and interactive games.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <Image
                  src="/images/3pic.PNG"
                  alt="Fatima working on projects"
                  className="w-full h-auto rounded-lg shadow-lg"
                  width={400}
                  height={300}
                />
              </div>

              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Building a Portfolio</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  Over the months, Fatima created a diverse portfolio showcasing her skills. By applying her knowledge to real-world projects, she gained experience in solving complex problems and developed confidence in her abilities. Her journey took a new turn as she began learning Next.js, further expanding her expertise in modern web development.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <Image
                  src="/images/4pic.jpg"
                  alt="Fatima mentoring others"
                  className="w-full h-auto rounded-lg shadow-lg"
                  width={400}
                  height={300}
                />
              </div>

              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Inspiring Others</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  Today, Fatima is not just a skilled developer but also an inspiration to others. She shares her experiences with fellow learners, encouraging them to overcome their challenges and pursue their goals.The story of Fatima is a testament to how determination and hard work can turn dreams into reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}