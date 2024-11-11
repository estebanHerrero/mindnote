import nuestrapp from '../assets/app/nuestrapp.png';



function Nuestrapp() {
    return (
        <div className='grid grid-cols-2 pb-32'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className="text-4xl text-[#313131] font-sans mx-2">Accede a Mindnote desde cualquier dispositivo, en cualquier momento y en cualquier lugar.</h1>
                <div className='flex items-center justify-center'>
                    <button className="bg-[#313131] text-white tracking-wide font-sans font-medium py-3 px-5 mr-3 rounded-2xl mt-20 text-3xl">Play Store</button>
                    <button className="bg-[#313131] text-white tracking-wide font-sans font-medium py-3 px-5 rounded-2xl mt-20 text-3xl">App Store</button>
                </div>
            </div>
            <div className='grid-cols-1 flex items-center justify-center'>
                <img src={nuestrapp} alt="" className='h-screen border-2 border-[#313131] rounded-3xl w-auto shadow-lg' />
            </div>
        </div>
    );
}


export default Nuestrapp;