// src/components/Logos/Logos.tsx
const Logos = () => {
  return (
    <section className="bg-[#0B0B0B] py-20 text-center text-white">
      <h2 className="mb-12 text-2xl font-semibold !text-white">
        Trusted by Industry Leaders
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
        <img
          src="/logo/nvidia.png"
          alt="NVIDIA"
          className="h-20 mx-auto sepia hue-rotate-[40deg] saturate-[500%] brightness-150 hover:sepia-0 hover:hue-rotate-0 hover:saturate-100 hover:brightness-100 hover:scale-110 transition duration-300"
        />
        <img
          src="/logo/intel.png"
          alt="Intel"
          className="h-16 mx-auto sepia hue-rotate-[40deg] saturate-[500%] brightness-150 hover:sepia-0 hover:hue-rotate-0 hover:saturate-100 hover:brightness-100 hover:scale-110 transition duration-300"
        />
        <img
          src="/logo/aws.png"
          alt="AWS"
          className="h-20 mx-auto sepia hue-rotate-[40deg] saturate-[500%] brightness-150 hover:sepia-0 hover:hue-rotate-0 hover:saturate-100 hover:brightness-100 hover:scale-110 transition duration-300"
        />
        <img
          src="/logo/azure.png"
          alt="Azure"
          className="h-22 mx-auto sepia hue-rotate-[40deg] saturate-[500%] brightness-150 hover:sepia-0 hover:hue-rotate-0 hover:saturate-100 hover:brightness-100 hover:scale-110 transition duration-300"
        />
        <img
          src="/logo/googlecloud.png"
          alt="Google Cloud"
          className="h-20 mx-auto sepia hue-rotate-[40deg] saturate-[500%] brightness-150 hover:sepia-0 hover:hue-rotate-0 hover:saturate-100 hover:brightness-100 hover:scale-110 transition duration-300"
        />
      </div>
    </section>
  );
};

export default Logos;
