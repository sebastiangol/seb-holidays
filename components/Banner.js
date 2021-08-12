import Image from 'next/image';

function Banner() {
  return (
    <div className="relative h-[200px] sm:h-[250px] lg:h-[300px] xl:h-[400px] 2xl:h-[500px] ">
      <Image
        src="https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-[60px] sm:top-[80px] lg:top-[100px] xl:top-[130px] 2xl:top-[170px] w-full text-center">
        <p className=" text-white font-bold text-sm sm:text-lg">
          No idea where you want to go?
        </p>
        <button className="bg-indigo-800 px-10 py-4 rounded-full shadow-md font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          Click here
        </button>
      </div>
    </div>
  );
}

export default Banner;
