import { useState } from "react";


export default function News() {
  const [click, setClick] = useState(false);
  return (
  <div className="w-full h-full bg-white py-8">
    <div className="bg-blue-500 text-white text-center py-4">
      <h1 className="text-xl font-bold">Nest high school</h1>
    </div>

    <div className="flex flex-col items-center justify-center text-center py-10 px-5">
      <h1 className="text-4xl font-bold mb-4">Welcome to Nest school</h1>
      <div className="text-gray-600 max-w-lg mb-6">
      Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley
      </div>
      <button className="bg-blue-500 text-white font-semibold px-6 py-2 rounded mb-4 hover:bg-blue-600" onClick={() => setClick(click + 1)}>
        Click me
      </button>
      <div className="text-gray-600">Clicked {click} times</div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-5 max-w-5xl mx-auto ">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-xl font-semibold mb-4">Why Choose Us?</h1>
        <div className="text-gray-600 space-y-2">
          <h1>✔️High Performance</h1>
          <h1>✔️Responsive Design</h1>
          <h1>✔️Easy to Use</h1>
          <h1>✔️Scalable Solution</h1>
          <h1>✔️24/7 Support</h1>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-xl font-semibold mb-4">Our Features</h1>
        <div className="text-gray-600 space-y-2">
          <h1>🚀Fast and Lightweight</h1>
          <h1>📱Mobile-First Approach</h1>
          <h1>🎨Customizable UI</h1>
          <h1>🔒Secure and Reliable</h1>
          <h1>🌍Global Reach</h1>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-xl font-semibold mb-4">Customer Reviews</h1>
        <div className="text-gray-600 space-y-2">
          <h1>Lorem Ipsum is simply dummy text of the printing and
          typesetting industry</h1>
          <h1>Lorem Ipsum is simply dummy text of the printing and
          typesetting industry</h1>
        </div>
      </div>

    </div>

    <div className="bg-gray-800 text-white text-center py-4 mt-10">
      <h1>2025 Our Company Nest education High school</h1>
    </div>
  </div>
  )
}