"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 bg-gray-100">
      <header className="w-full bg-blue-600 p-4 text-white text-center">
        <h1 className="text-3xl font-bold">Welcome to Our Website</h1>
      </header>
      <section className="w-full max-w-4xl mx-auto mt-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Explore Our Features</h2>
        <p className="text-gray-700 mb-6">
          Discover a variety of features and services designed to enhance your experience. We offer solutions that cater to your needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="relative h-48 w-full">
              <Image src="/kalki11.jpeg" alt="Feature 1" fill className="rounded-md object-cover"/>
            </div>
            <h3 className="text-xl font-medium mt-4">Feature One</h3>
            <p className="text-gray-600 mt-2">Learn more about Feature One and how it can help you achieve your goals.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="relative h-48 w-full">
              <Image src="/bird1.jpg" alt="Feature 2" fill className="rounded-md object-cover"/>
            </div>
            <h3 className="text-xl font-medium mt-4">Feature Two</h3>
            <p className="text-gray-600 mt-2">Explore the benefits of Feature Two and see how it can make a difference.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="relative h-48 w-full">
              <Image src="/kalki2.jpeg" alt="Feature 3" fill className="rounded-md object-cover"/>
            </div>
            <h3 className="text-xl font-medium mt-4">Feature Three</h3>
            <p className="text-gray-600 mt-2">Find out more about Feature Three and its innovative solutions.</p>
          </div>
        </div>
      </section>
      <section className="w-full max-w-4xl mx-auto mt-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-700 mb-6">
          We are committed to providing exceptional service and delivering innovative solutions that meet your needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="relative h-64 w-full">
              <Image src="/bird3.jpg" alt="About Us 1" fill className="rounded-md object-cover"/>
            </div>
            <h3 className="text-xl font-medium mt-4">Our Mission</h3>
            <p className="text-gray-600 mt-2">Learn more about our mission and how we strive to achieve it every day.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="relative h-64 w-full">
              <Image src="/kalki22.jpeg" alt="About Us 2" fill className="rounded-md object-cover"/>
            </div>
            <h3 className="text-xl font-medium mt-4">Our Team</h3>
            <p className="text-gray-600 mt-2">Meet the dedicated professionals who are the driving force behind our success.</p>
          </div>
        </div>
      </section>
      <button 
        onClick={() => router.push('/dashboard')}
        className="mt-8 px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-300"
      >
        Go to Dashboard
      </button>
      <footer className="w-full bg-blue-600 p-4 text-white text-center mt-8">
        <p>&copy; 2024 Our Website. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Home;
