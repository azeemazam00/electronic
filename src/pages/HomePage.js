import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <div className="relative">
 {/* Navigation Bar */}
<nav className="flex items-center justify-between bg-[#BCCDE0]/50 p-4">
  {/* Left-aligned Logo */}
  <div className="text-black text-2xl font-medium">
    <Link to="/">LOGO</Link>
  </div>

  {/* Center Navigation Links */}
  <div className="flex space-x-8 items-center">
    {/* Home Link */}
    <div>
      <Link to="/" className="text-black text-lg">Home</Link>
    </div>

    {/* Dropdown for Electronics */}
    <div className="relative">
      <button
        onClick={() => toggleDropdown(1)}
        className="text-black text-lg flex items-center"
      >
        Electronics
        <span className="ml-1">&#9660;</span> {/* Arrow Icon */}
      </button>
      {dropdownOpen === 1 && (
        <div className="absolute mt-2 w-48 bg-white text-gray-800 border border-gray-300 rounded-md shadow-md">
          <Link to="/electronics/category1" className="block px-4 py-2 hover:bg-gray-100">MOBILE</Link>
          <Link to="/electronics/category2" className="block px-4 py-2 hover:bg-gray-100">Camera</Link>
          <Link to="/electronics/category3" className="block px-4 py-2 hover:bg-gray-100">HEADPHONES</Link>
        </div>
      )}
    </div>

    {/* Dropdown for Contact */}
    <div className="relative">
      <button
        onClick={() => toggleDropdown(2)}
        className="text-black text-lg flex items-center"
      >
        Contact
        <span className="ml-1">&#9660;</span>
      </button>
      {dropdownOpen === 2 && (
        <div className="absolute mt-2 w-48 bg-white text-gray-800 border border-gray-300 rounded-md shadow-md">
          
        </div>
      )}
    </div>

    {/* Dropdown for About */}
    <div className="relative">
      <button
        onClick={() => toggleDropdown(3)}
        className="text-black text-lg flex items-center"
      >
        About
        <span className="ml-1">&#9660;</span>
      </button>
      {dropdownOpen === 3 && (
        <div className="absolute mt-2 w-48 bg-white text-gray-800 border border-gray-300 rounded-md shadow-md">
          <Link to="/about/company" className="block px-4 py-2 hover:bg-gray-100">Features</Link>
          <Link to="/about/team" className="block px-4 py-2 hover:bg-gray-100">Team</Link>
          <Link to="/about/team" className="block px-4 py-2 hover:bg-gray-100">Timing</Link>
        </div>
      )}
    </div>

    {/* Login Option */}
    <div>
      <Link to="/login" className="text-black text-lg">Login</Link>
    </div>
  </div>
</nav>




      {/* Jumbotron */}
      <div className="grid grid-cols-12 h-[400px] relative"> {/* Increased height */}
        <div className="col-span-6 relative bg-[#BCCDE0] flex items-center overflow-hidden rounded-br-[100px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/assets/12.png')` }}
          ></div>
        </div>
        <div className="col-span-6 flex flex-col justify-center p-8">
          <h5 className="text-red-500 text-xl font-semibold"> In the spotlight</h5>
          <h1 className="text-black text-4xl font-bold mt-2 mb-4">Your sound best 
          for your life</h1>
          <p className="text-gray-700 mb-4">These have large ear cups that encompass the ears, providing good sound isolation and often better sound quality.</p>
          <p className="text-[#EC3D2F] font-semibold">Join us now and get exclusive offers!</p>
          <Link to="/shop" className="mt-5 inline-block px-4 py-2 bg-[#EC3D2F] text-white font-semibold text-lg rounded-md shadow-md hover:bg-[#d32f2f] transition duration-300 max-w-[150px] text-center">
            Shop Now
          </Link>
        </div>
      </div>

      {/* Features Section */}
<div className="py-12 bg-[#F9FAFB]">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">Amazing Features</h2>
  </div>
</div>

<div className="w-full bg-[#BCCDE0] py-12 flex items-center">
  {/* Left: Image */}
  <div className="flex justify-start w-1/2 pl-8">
    <img src="/assets/2.png" alt="Highlights" className="max-w-[500px] h-auto rounded-none" />
  </div>

  {/* Right: Feature Details */}
  <div className="w-1/2 text-left mr-5">
    <div className="flex flex-col space-y-6 mr-10">
      {/* Feature 1: Touch Controls */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800">Touch Controls</h3>
        <p className="text-gray-600 mt-2">
          Some headphones have touch-sensitive surfaces for controlling playback.
        </p>
      </div>

      {/* Feature 2: Sound Quality */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800">Sound Quality</h3>
        <p className="text-gray-600 mt-2">
          This includes considerations like bass response, clarity, and overall audio fidelity.
        </p>
      </div>

      {/* Feature 3: Microphone */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800">Microphone</h3>
        <p className="text-gray-600 mt-2">
          Built-in microphones enable hands-free calling and voice commands.
        </p>
      </div>
    </div>
  </div>
</div>


<div className="w-full bg-[#F9FAFB] py-24">
  {/* Category Heading Section */}
  <div className="text-center mb-12">
    <h1 className="text-4xl font-bold text-[#EC3D2F] mb-4">Category</h1>
    <h3 className="text-2xl font-medium text-gray-600">Can we help you pick a headphone?</h3>
  </div>

  {/* Images Section */}
  <div className="flex justify-center space-x-6">
    {/* Container for each image */}
    <div className="flex flex-col items-center border border-gray-300 rounded-lg overflow-hidden p-4 shadow-lg">
      <img src="/assets/3.png" alt="Category 1" className="w-[200px] h-auto mb-4" />
      <h4 className="text-xl font-semibold text-gray-800">iPhone</h4>
    </div>
    <div className="flex flex-col items-center border border-gray-300 rounded-lg overflow-hidden p-4 shadow-lg">
      <img src="/assets/8.png" alt="Category 2" className="w-[200px] h-auto mb-4" />
      <h4 className="text-xl font-semibold text-gray-800">laptop</h4>
    </div>
    <div className="flex flex-col items-center border border-gray-300 rounded-lg overflow-hidden p-4 shadow-lg">
      <img src="/assets/7.png" alt="Category 3" className="w-[200px] h-auto mb-4" />
      <h4 className="text-xl font-semibold text-gray-800">watch</h4>
    </div>
    <div className="flex flex-col items-center border border-gray-300 rounded-lg overflow-hidden p-4 shadow-lg">
      <img src="/assets/2.png" alt="Category 4" className="w-[200px] h-auto mb-4" />
      <h4 className="text-xl font-semibold text-gray-800">headphone</h4>
    </div>
    <div className="flex flex-col items-center border border-gray-300 rounded-lg overflow-hidden p-4 shadow-lg">
      <img src="/assets/5.png" alt="Category 5" className="w-[200px] h-auto mb-4" />
      <h4 className="text-xl font-semibold text-gray-800">tablet</h4>
    </div>
  </div>
</div>







<div className="w-full bg-[#F9FAFB] py-24 min-h-[500px]"> 
  {/* Container with two sections */}
  <div className="flex justify-between items-start px-6 space-x-6">
    
    {/* Left Card */}
    <div className="w-1/2 flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-md min-h-[400px]">
      <div className="flex-shrink-0 w-1/3 p-4">
        <img src="/assets/4.png" alt="Discount Offer" className="w-full h-auto" />
      </div>
      <div className="w-2/3 p-4">
        <h2 className="text-2xl font-bold text-[#EC3D2F] mb-2">Save 25% Now</h2>
        <p className="text-gray-800"> Catch hotest Deals in Cameras category</p>
        <Link to="/shop" className="mt-5 inline-block px-4 py-2 bg-[#EC3D2F] text-white font-semibold text-lg rounded-md shadow-md hover:bg-[#d32f2f] transition-all duration-300 ease-in-out max-w-[150px] text-center">
          Shop Deals
        </Link>
      </div>
    </div>

    {/* Right Card */}
    <div className="w-1/2 flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-md min-h-[400px]">
      <div className="flex-shrink-0 w-1/3 p-4">
        <img src="/assets/5.png" alt="Limited Offer" className="w-full h-auto" />
      </div>
      <div className="w-2/3 p-4">
        <h2 className="text-2xl font-bold text-[#EC3D2F] mb-2">Exclusive 25% Discount</h2>
        <p className="text-gray-800">Tablets smartphone and more!</p>
        <Link to="/shop" className="mt-5 inline-block px-4 py-2 bg-[#EC3D2F] text-white font-semibold text-lg rounded-md shadow-md hover:bg-[#d32f2f] transition-all duration-300 ease-in-out max-w-[150px] text-center">
          Only $99.9
        </Link>
      </div>
    </div>

  </div>
</div>


<div className="text-center mb-12">
    <h1 className="text-4xl font-bold text-[#00000] mb-4">Top Rated Products</h1>
   
  </div>




  <div className="w-full bg-[#F9FAFB] py-24">
  {/* Container for Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
    
   {/* Card 1 */}
<div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg p-4 relative hover:scale-105 transition-transform duration-300 ease-in-out">
  {/* Top Related Label */}
  <span className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-xs font-semibold rounded-md">Top Rated</span>
  <img src="/assets/led.png" alt="Product 1" className="w-full h-auto mb-4 rounded-md" />
  <h2 className="text-center text-lg font-bold text-gray-800">LED 4k smart TV expo White/Gray/Black</h2> {/* Product Name */}
  <p className="text-center text-red-600 font-semibold mt-1">$499</p> {/* Price */}
</div>

{/* Card 2 */}
<div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg p-4 relative hover:scale-105 transition-transform duration-300 ease-in-out">
  <span className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-xs font-semibold rounded-md">Top Rated</span>
  <img src="/assets/2.png" alt="Product 2" className="w-full h-auto mb-4 rounded-md" />
  <h2 className="text-center text-lg font-bold text-gray-800">GM-2345 closed back wireless Headphones</h2> {/* Product Name */}
  <p className="text-center text-red-600 font-semibold mt-1">$99</p> {/* Price */}
</div>

{/* Card 3 */}
<div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg p-4 relative hover:scale-105 transition-transform duration-300 ease-in-out">
  <span className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-xs font-semibold rounded-md">Top Rated</span>
  <img src="/assets/111.png" alt="Product 3" className="w-full h-auto mb-4 rounded-md" />
  <h2 className="text-center text-lg font-bold text-gray-800">Wireless Headphones</h2> {/* Product Name */}
  <p className="text-center text-red-600 font-semibold mt-1">$99</p> {/* Price */}
</div>

{/* Card 4 */}
<div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg p-4 relative hover:scale-105 transition-transform duration-300 ease-in-out">
  <span className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-xs font-semibold rounded-md">Top Rated</span>
  <img src="/assets/laptop.png" alt="Product 4" className="w-full h-auto mb-4 rounded-md" />
  <h2 className="text-center text-lg font-bold text-gray-800">Laptop 4k smart TV expo</h2> {/* Product Name */}
  <p className="text-center text-red-600 font-semibold mt-1">$599</p> {/* Price */}
</div>

{/* Card 5 */}
<div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg p-4 relative hover:scale-105 transition-transform duration-300 ease-in-out">
  <span className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-xs font-semibold rounded-md">Top Rated</span>
  <img src="/assets/ac.png" alt="Product 5" className="w-full h-auto mb-4 rounded-md" />
  <h2 className="text-center text-lg font-bold text-gray-800">Mobile phone accessories</h2> {/* Product Name */}
  <p className="text-center text-red-600 font-semibold mt-1">$849</p> {/* Price */}
</div>

{/* Card 6 */}
<div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg p-4 relative hover:scale-105 transition-transform duration-300 ease-in-out">
  <span className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-xs font-semibold rounded-md">Top Rated</span>
  <img src="/assets/usb.png" alt="Product 6" className="w-full h-auto mb-4 rounded-md" />
  <h2 className="text-center text-lg font-bold text-gray-800">Accessories for mobile</h2> {/* Product Name */}
  <p className="text-center text-red-600 font-semibold mt-1">$949</p> {/* Price */}
</div>

{/* Card 7 */}
<div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg p-4 relative hover:scale-105 transition-transform duration-300 ease-in-out">
  <span className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-xs font-semibold rounded-md">Top Rated</span>
  <img src="/assets/cam.png" alt="Product 7" className="w-full h-auto mb-4 rounded-md" />
  <h2 className="text-center text-lg font-bold text-gray-800">GM-2345 closed back camera</h2> {/* Product Name */}
  <p className="text-center text-red-600 font-semibold mt-1">$1,099</p> {/* Price */}
</div>

{/* Card 8 */}
<div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg p-4 relative hover:scale-105 transition-transform duration-300 ease-in-out">
  <span className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-xs font-semibold rounded-md">Top Rated</span>
  <img src="/assets/5.png" alt="Product 8" className="w-full h-auto mb-4 rounded-md" />
  <h2 className="text-center text-lg font-bold text-gray-800">Mobile 4k smart TV expo</h2> {/* Product Name */}
  <p className="text-center text-red-600 font-semibold mt-1">$399</p> {/* Price */}
</div>


  </div>
</div>

<div className=" mb-12">
    <h2 className="text-4xl font-bold text-[#00000] mb-4"> Shop product by</h2>
    </div>




    <div className="bg-[#BCCDE0] py-12 rounded-2xl mx-auto max-w-4xl">
  <div className="flex items-center px-6">
    <div className="flex-shrink-0 w-1/3 pr-8">
      <img src="/assets/1.jpg" alt="Category 1" className="w-full h-auto max-w-[400px]" /> {/* Adjust max-width for larger size */}
    </div>
    <div className="flex-grow">
    <div className="w-2/3 p-4">
        <h2 className="text-2xl font-bold text-[#00000] mb-2">Define Yourself  be Different </h2>
        <p className="text-gray-800">Enjoy a 25% discount on all our products. Limited time offer. Shop now and save big on your favorite items!</p>
        <Link to="/shop" className="mt-5 inline-block px-4 py-2 bg-[#EC3D2F] text-white font-semibold text-lg rounded-md shadow-md hover:bg-[#d32f2f] transition duration-300 max-w-[150px] text-center">
            Shop Now
        </Link>
      </div>
    </div>
  </div>
</div>

<div className=" mb-12">
    <h2 className="text-4xl font-bold text-[#00000] mb-4">New Arrival</h2>
    </div>



{/* Images Section */}
<div className="flex flex-wrap justify-center gap-8 mt-6">
  {/* Container for each image */}
  <div className="flex flex-col justify-between items-center border border-gray-300 rounded-lg overflow-hidden p-4 shadow-lg w-[240px] h-[400px] relative transition-transform transform hover:scale-105 hover:shadow-xl bg-white">
    <img src="/assets/10.png" alt="Category 1" className="w-[160px] h-auto mb-4" />
    
    {/* Product description */}
    <p className="text-gray-600 text-center text-sm mt-2">The latest iPhone with cutting-edge technology.</p>
    
    {/* Price and Add to Cart button */}
    <div className="flex justify-between items-center w-full mt-auto pt-4 border-t border-gray-200">
      <div className="text-md font-bold text-[#EC3D2F]">$999</div>
      <button className="bg-[#EC3D2F] hover:bg-[#EC3D2F] text-black text-sm px-3 py-2 rounded">Add to Cart</button>
    </div>
  </div>

  <div className="flex flex-col justify-between items-center border border-gray-300 rounded-lg overflow-hidden p-4 shadow-lg w-[240px] h-[400px] relative transition-transform transform hover:scale-105 hover:shadow-xl bg-white">
    <img src="/assets/f.png" alt="Category 2" className="w-[160px] h-auto mb-4" />
    
    {/* Product description */}
    <p className="text-gray-600 text-center text-sm mt-2">The latest iPhone .</p>
    <button className="bg-[#EC3D2F] hover:bg-[#EC3D2F] text-black text-sm px-3 py-2 rounded">Add to Cart</button>
    
    {/* Price and Add to Cart button */}
    <div className="flex justify-between items-center w-full mt-auto pt-4 border-t border-gray-200">
      <div className="text-md font-bold text-[#EC3D2F]">$999</div>
      <button className="bg-[#EC3D2F] hover:bg-[#EC3D2F] text-black text-sm px-3 py-2 rounded">Add to Cart</button>
    </div>
  </div>

  <div className="flex flex-col justify-between items-center border border-gray-300 rounded-lg overflow-hidden p-4 shadow-lg w-[240px] h-[400px] relative transition-transform transform hover:scale-105 hover:shadow-xl bg-white">
    <img src="/assets/6.png" alt="Category 3" className="w-[160px] h-auto mb-4" />
    
    {/* Product description */}
    <p className="text-gray-600 text-center text-sm mt-2">The latest iPhone with cutting-edge technology.</p>
    
    {/* Price and Add to Cart button */}
    <div className="flex justify-between items-center w-full mt-auto pt-4 border-t border-gray-200">
      <div className="text-md font-bold text-[#EC3D2F]">$999</div>
      <button className="bg-[#EC3D2F] hover:bg-[#EC3D2F] text-black text-sm px-3 py-2 rounded">Add to Cart</button>
    </div>
  </div>

  <div className="flex flex-col justify-between items-center border border-gray-300 rounded-lg overflow-hidden p-4 shadow-lg w-[240px] h-[400px] relative transition-transform transform hover:scale-105 hover:shadow-xl bg-white">
    <img src="/assets/3.png" alt="Category 4" className="w-[160px] h-auto mb-4" />
    
    {/* Product description */}
    <p className="text-gray-600 text-center text-sm mt-2">The latest iPhone with cutting-edge technology.</p>
    
    {/* Price and Add to Cart button */}
    <div className="flex justify-between items-center w-full mt-auto pt-4 border-t border-gray-200">
      <div className="text-md font-bold text-[#EC3D2F]">$90</div>
      <button className="bg-[#EC3D2F] hover:bg-[#EC3D2F] text-black text-sm px-3 py-2 rounded">Add to Cart</button>
    </div>
  </div>
</div>





<div className="w-full bg-white py-24 min-h-[600px]"> {/* Increased container height */}
  {/* Container for Left and Right Sections */}
  <div className="flex justify-between items-start px-6 bg-[#BCCDE0] space-x-6 min-h-[500px]"> {/* Adjusted container height */}
    {/* Left Section */}
    <div className="w-1/2 flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-lg min-h-[450px]"> {/* Increased left section height */}
      <div className="flex-shrink-0 w-1/3 p-4">
        <img src="/assets/111.png" alt="Category 1" className="w-full h-auto" />
      </div>
      <div className="w-2/3 p-4">
      <h2 className="text-2xl font-bold text-black mb-2">Awesome Airpods</h2>
      <p className="text-gray-800">Get 25% off on our latest collection.</p>
        <Link to="/shop" className="mt-5 inline-block px-4 py-2 bg-[#EC3D2F] text-white font-semibold text-lg rounded-md shadow-md hover:bg-[#d32f2f] transition duration-300 max-w-[150px] text-center">
          Shop Now
        </Link>
      </div>
    </div>

    {/* Right Section */}
    <div className="w-1/2 flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-lg min-h-[450px]"> {/* Increased right section height */}
      <div className="flex-shrink-0 w-1/3 p-4">
        <img src="/assets/7.png" alt="Category 2" className="w-full h-auto" />
      </div>
      <div className="w-2/3 p-4">
      <h2 className="text-2xl font-bold text-black mb-2">Smart Watch</h2>
       
        <Link to="/shop" className="mt-5 inline-block px-4 py-2 bg-[#EC3D2F] text-white font-semibold text-lg rounded-md shadow-md hover:bg-[#d32f2f] transition duration-300 max-w-[150px] text-center">
          99.9$
        </Link>
      </div>
    </div>
  </div>
</div>

<div className="w-full bg-white py-24 min-h-[600px]">
  {/* New Container for Centered h1 */}
  <div className="flex items-center justify-center min-h-[200px] bg-[#BCCDE0] mt-10">
    <h1 className="text-4xl font-bold text-center text-[#000000]">10%paying while paying on card </h1>
  </div>
  </div>




  <div className="w-full min-h-screen bg-white flex">
  {/* Left Side with Headings and Small Containers */}
  <div className="flex flex-col items-start justify-center md:w-1/2 p-8">
    <h3 className="text-[#EC3D2F] text-3xl font-bold">Comment level</h3>
    <h1 className="text-black text-6xl font-bold mt-4">A New Style In Your Ear</h1>


    {/* Container for Small Boxes */}
    <div className="flex flex-col items-start mt-8 space-y-4">
      <div className="flex space-x-4 mb-4">
      <div className="bg-[#BCCDE0] p-6 rounded-lg w-48 h-24">

          <h1 className="text-[#EC3D2F] font-bold">4M USER</h1>
        </div>
        <div className="bg-[#BCCDE0] p-4 rounded-lg w-48 h-24">
          <h1 className="text-[#EC3D2F] font-bold">53K USER</h1>
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="bg-[#BCCDE0] p-4 rounded-lg w-48 h-24">
          <h1 className="text-[#EC3D2F] font-bold">155 USER</h1>
        </div>
        <div className="bg-[#BCCDE0] p-4 rounded-lg w-48 h-24">
          <h1 className="text-[#EC3D2F] font-bold">2M  USER</h1>
        </div>
      </div>
    </div>
  </div>

  {/* Right Side with Image */}
  <div className="md:w-1/2 flex items-center justify-center p-8">
    <img src="/assets/333.webp" alt="Descriptive Alt Text" className="w-full h-auto max-w-md rounded-md" />
  </div>
</div>








<div className="w-full bg-[#BCCDE0] text-black py-24">
  <div className="max-w-screen-xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    
    {/* Column 1 */}
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Gateway to Success</h2>
      <p className="mb-2">Start Pages</p>
      <p className="mb-2">Demo (Sales)</p>
      <p className="mb-2">Home</p>
      <p className="mb-2">404 Style Guide</p>
      <p className="mb-2">All Templates</p>
    </div>

    {/* Column 2 */}
    <div>
      <h2 className="text-2xl font-bold mb-4">Services</h2>
      <p className="mb-2">Services</p>
      <p className="mb-2">Password</p>
      <p className="mb-2">Licencing</p>
      <p className="mb-2">Supports</p>
      <p className="mb-2">About</p>
    </div>

    {/* Column 3 */}
    <div>
      <h2 className="text-2xl font-bold mb-4">Work</h2>
      <p className="mb-2">Work</p>
      <p className="mb-2">Work Details</p>
      <p className="mb-2">Blog</p>
      <p className="mb-2">Blog Details</p>
      <p className="mb-2">Instructions</p>
    </div>

    {/* Column 4 */}
    <div>
      <h2 className="text-2xl font-bold mb-4">Shop</h2>
      <p className="mb-2">Shop</p>
      <p className="mb-2">Shop Details</p>
      <p className="mb-2">Checkout</p>
      <p className="mb-2">Change log</p>
      <p className="mb-2">Here!</p>
      <p className="mb-2">hello@helloflow.com</p>
    </div>

  </div>
  
  <div className="text-center mt-10">
    <p className="text-sm">©  C2024-Powered by Webflow With by ABuy this template for $69 USD</p>
  </div>
</div>




<div className="w-full min-h-screen bg-[#BCCDE0] flex justify-center items-center">
  {/* White container inside */}
  <div className="w-4/5 h-[600px] bg-white p-12 shadow-lg rounded-lg relative">
    {/* Navbar aligned at the top */}
    <nav className="flex items-center justify-between w-full p-4 absolute top-0 left-0">
      {/* Logo */}
      <Link to="/" className="text-black text-2xl font-bold">Your Logo</Link>

      {/* Navigation links */}
      <div className="flex space-x-6">
        <Link to="/home" className="text-black text-xl transition hover:font-bold">Home</Link>
        <Link to="/electronics" className="text-black text-xl transition hover:font-bold">Electronics</Link>
        <Link to="/contact" className="text-black text-xl transition hover:font-bold">Contact</Link>
        <Link to="/about" className="text-black text-xl transition hover:font-bold">About</Link>
      </div>
    </nav>

    {/* Sign-in form and image below the navbar */}
    <div className="flex mt-16"> {/* Margin-top to create space below the navbar */}
      {/* Sign-in form on the left */}
      <div className="w-1/2 pr-10">
        <h2 className="text-3xl font-bold mb-6 text-red-800">Sign In</h2>
        <form>
          <div className="mb-4">
           
            <input 
              type="email" 
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EC3D2F] transition" 
              placeholder="username" 
            />
          </div>
          <div className="mb-6">
            
            <input 
              type="password" 
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EC3D2F] transition" 
              placeholder="password" 
            />
          </div>
          <div className="flex flex-col items-end space-y-4">
  <button 
    type="submit" 
    className="bg-[#EC3D2F] text-white text-lg px-6 py-3 rounded-lg hover:bg-[#d02b24] transition"
  >
    Login
  </button>

  <button 
    type="button" 
    className="bg-blue-600 text-white text-lg px-6 py-3 rounded-lg hover:bg-blue-700 transition"
  >
    Login with Facebook
  </button>

  <button 
    type="button" 
    className="bg-[#DB4437] text-white text-lg px-6 py-3 rounded-lg hover:bg-[#c33f2f] transition ml-auto"
  >
    Login with Gmail
  </button>
</div>


        </form>
      </div>

      {/* Image on the right */}
      <div className="w-1/2">
        <img 
          src="/assets/12.png" 
          alt="Sign In" 
          className="w-full h-full object-cover rounded-lg" 
          style={{ maxHeight: '100%' }} // Ensure the image is large
        />
      </div>
    </div>
  </div>
</div>



<div className="w-full min-h-screen bg-[#BCCDE0] flex justify-center items-center">
  {/* White container inside */}
  <div className="w-4/5 h-[600px] bg-white p-12 shadow-lg rounded-lg relative flex flex-col md:flex-row">
    {/* Navbar aligned at the top */}
    <nav className="flex items-center justify-between w-full p-4 absolute top-0 left-0">
      {/* Logo */}
      <Link to="/" className="text-black text-2xl font-bold">Your Logo</Link>

      {/* Navigation links */}
      <div className="flex space-x-6">
        <Link to="/home" className="text-black text-xl transition hover:font-bold">Home</Link>
        <Link to="/electronics" className="text-black text-xl transition hover:font-bold">Electronics</Link>
        <Link to="/contact" className="text-black text-xl transition hover:font-bold">Contact</Link>
        <Link to="/about" className="text-black text-xl transition hover:font-bold">About</Link>
      </div>
    </nav>

    {/* Content below the navbar */}
    <div className="flex flex-col justify-center items-start w-full md:w-1/2 mt-20 md:mt-0 space-y-4">
      {/* Main heading */}
      <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">Open a mobile accessories  store only </h1>
      {/* Subheading */}
      <h3 className="text-2xl text-black-400 md:text-3xl">best tip to start an online business </h3>
      {/* Shop Now button */}
      <Link 
        to="/shop" 
        className="bg-[#EC3D2F] text-black text-lg px-6 py-3 rounded-lg shadow-md hover:bg-red-300 transition transform hover:scale-105"
      >
        Shop Now
      </Link>
    </div>

    {/* Image on the right without background */}
    <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
      <img 
        src="/assets/12.png" 
        alt="Shop" 
        className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg bg-transparent" 
      />
    </div>
  </div>
</div>


<div className="w-full bg-[#BCCDE0] p-4">
  <div className="flex justify-between gap-0">
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold">870</h2>
      <p className="text-gray-700">Shops.</p>
    </div>
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold">20000+</h2>
      <p className="text-gray-700">User.</p>
    </div>
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold">260</h2>
      <p className="text-gray-700">Subscriber.</p>
    </div>
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold">73,800</h2>
      <p className="text-gray-700">Active.</p>
    </div>
  </div>

  {/* New Sections Below */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
    {/* Section 1 */}
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-bold">Choose Teaching</h3>
      <p className="text-gray-700">
        Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      </p>
    </div>
    
    {/* Section 2 */}
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-bold">24/7 Available</h3>
      <p className="text-gray-700">
        Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      </p>
    </div>
    
    {/* Section 3 */}
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-bold">Why Choose Us</h3>
      <p className="text-gray-700">
        Benefits of online buying service with us.
      </p>
    </div>
    
    {/* Section 4 */}
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-bold">Whiteboard</h3>
      <p className="text-gray-700">
        Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      </p>
    </div>
    
    {/* Additional Information */}
    <div className="col-span-1 sm:col-span-2 md:col-span-4 bg-white p-4 rounded-lg shadow mt-4">
      <h3 className="text-lg font-bold">Active Users</h3>
      <p className="text-gray-700">73,990 Active</p>
      <p className="text-gray-700">Affordable Price</p>
      <p className="text-gray-700">
        Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
      </p>
    </div>
  </div>

  <div className="bg-white p-6 rounded-lg shadow mt-6 flex items-center">
    {/* Image on the left */}
    <div className="flex-shrink-0 mr-4">
      <img 
        src="/assets/q.png" // replace with your image path
        alt="Descriptive Alt Text"
        className="w-32 h-32 object-cover rounded-lg" // increased size
      />
    </div>
    {/* Text on the right */}
    <div className="flex-grow">
      <h3 className="text-lg font-bold">Customer Your Product Us</h3>
      <p className="text-gray-700 mt-2">Personalized professional online buying on your schedule.</p>
      <p className="text-gray-700 mt-2">
        Simply dummy text of the printing and typesetting industry
      </p>
    </div>
    {/* Button on the left */}
    <div className="mt-4">
      <button className="bg-[#EC3D2F] text-white text-lg px-6 py-3 rounded-lg hover:bg-[#d02b24] transition">
        Get Started
      </button>
    </div>
  </div>

  {/* Second New Section Below with Image on the Right */}
  <div className="bg-white p-6 rounded-lg shadow mt-6 flex items-center">
    {/* Text on the left */}
    <div className="flex-grow mr-4">
      <h3 className="text-lg font-bold">Another Section Title</h3>
      <p className="text-gray-700 mt-2">Additional content describing features or services.</p>
      <p className="text-gray-700 mt-2">
        Further information about the topic. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, making it a trusted placeholder.
      </p>
      <button className="bg-[#EC3D2F] text-white text-lg px-6 py-3 rounded-lg hover:bg-[#d02b24] transition mt-4">
        Get Started
      </button>
    </div>
    {/* Image on the right */}
    <div className="flex-shrink-0">
      <img 
        src="/assets/12.png" // replace with your image path
        alt="Descriptive Alt Text"
        className="w-32 h-32 object-cover rounded-lg" // increased size
      />
    </div>
  </div>
</div>
<div className="w-full bg-white p-4">
  {/* Testimonial Section */}
  <div className="text-center mt-8">
    <h2 className="text-2xl font-bold text-red-500">Our Testimonial</h2>
    <p className="text-gray-700 mb-4 font-bold">What our users say about us</p>
    
    <div className="bg-[#BCCDE0] p-6 rounded-lg shadow-md mx-auto max-w-lg">
      <h3 className="text-xl font-semibold">About Monica</h3>
      <p className="text-gray-700 italic">Student at Finance</p>
      <p className="text-gray-700 mt-2">
        Simply dummy text of the printing and typesetting industry.
      </p>
    </div>
  </div>
</div>










<div className="w-full min-h-screen bg-[#BCCDE5] flex justify-center items-center">
  {/* White container inside with sky-blue background */}
  <div className="w-4/5 h-[600px] bg-[#BCCDE0] p-12 shadow-lg rounded-lg relative flex flex-col md:flex-row">
    {/* Navbar aligned at the top */}
    <nav className="flex items-center justify-between w-full p-4 absolute top-0 left-0">
      {/* Logo */}
      <Link to="/" className="text-black text-2xl font-bold">Your Logo</Link>

      {/* Navigation links */}
      <div className="flex space-x-6">
        <Link to="/home" className="text-black text-xl transition hover:font-bold">Home</Link>
        <Link to="/electronics" className="text-black text-xl transition hover:font-bold">Electronics</Link>
        <Link to="/contact" className="text-black text-xl transition hover:font-bold">Contact</Link>
        <Link to="/about" className="text-black text-xl transition hover:font-bold">About</Link>
      </div>
    </nav>

    {/* Contact Us section */}
<div className="w-full md:w-1/2 flex flex-col justify-center items-start mt-20 md:mt-0 space-y-4">
  <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
  <p className="text-lg text-gray-700">
    s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  </p>
  <p className="text-lg text-gray-700">kashifhurmat893@gmail.com</p>
  <p className="text-lg text-gray-700">+92 302 5058 413</p>
</div>


    {/* Contact form section */}
<div className="w-full md:w-1/2 flex justify-center items-center mt-20 md:mt-0">
  <form className="bg-white p-6 rounded-lg shadow-md w-full space-y-4">
    <h2 className="text-2xl font-bold text-gray-800">We’d love to hear from you! Let's get in touch</h2>
    
    <input
      type="text"
      placeholder="Name"
      className="w-full p-3 border border-gray-300 rounded-md"
      required
    />
    
    <input
      type="email"
      placeholder="Email"
      className="w-full p-3 border border-gray-300 rounded-md"
      required
    />
    
    <input
      type="password"
      placeholder="Password"
      className="w-full p-3 border border-gray-300 rounded-md"
      required
    />

    <input
      type="text"
      placeholder="User"
      className="w-full p-3 border border-gray-300 rounded-md"
      required
    />

    <input
      type="text"
      placeholder="Type here"
      className="w-full p-3 border border-gray-300 rounded-md"
      required
    />
    
    <input
      type="tel"
      placeholder="Phone number"
      className="w-full p-3 border border-gray-300 rounded-md"
      required
    />
    
    <button 
      type="submit" 
      className="bg-[#EC3D2F] text-black text-lg px-6 py-3 rounded-lg shadow-md hover:bg-red-300 transition transform hover:scale-105"
    >
      Send Message
    </button>
  </form>
</div>

  </div>
</div>





  </div>
  
  );
};

export default HomePage;
