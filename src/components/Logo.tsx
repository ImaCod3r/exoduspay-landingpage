function Logo() {
    return (
        <div className="flex items-center">
            <img className="w-[50px]" src={new URL("../assets/logo.png", import.meta.url).href} alt="Logo image" />
            <h1 className="text-white font-bold text-2xl">ExodusPay</h1>
        </div>
    )
}

export default Logo;