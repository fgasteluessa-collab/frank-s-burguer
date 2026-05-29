export default function FranksBurguerPremium() {
  const burgers = [
    {
      name: 'CLÁSICA SMASH 🔥',
      price: '$8.500',
      description:
        'Doble smash burger, cheddar, cebolla y salsa Frank’s.',
      image:
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'BACON FIRE 🔥',
      price: '$10.900',
      description:
        'Doble carne, bacon crispy, cheddar y salsa especial.',
      image:
        'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'CHEESE BURGUER 🔥',
      price: '$8.900',
      description:
        'Carne premium, doble cheddar y salsa de la casa.',
      image:
        'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'BBQ BURGUER 🔥',
      price: '$10.500',
      description:
        'Carne, cheddar, bacon y salsa BBQ ahumada.',
      image:
        'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <header className="border-b border-red-900/30 sticky top-0 z-50 backdrop-blur bg-black/90">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black leading-none">
              FRANK´S
            </h1>
            <p className="text-red-600 text-3xl font-black leading-none">
              BURGUER
            </p>
          </div>

          <nav className="hidden lg:flex gap-8 text-sm font-semibold text-gray-300">
            <a href="#" className="text-orange-500">INICIO</a>
            <a href="#menu">MENÚ</a>
            <a href="#combos">COMBOS</a>
            <a href="#sucursales">SUCURSALES</a>
            <a href="#">CONTACTO</a>
          </nav>

          <a
            href="https://wa.me/543873120274"
            target="_blank"
            className="border border-red-600 px-5 py-3 rounded-xl font-bold hover:bg-red-600 transition"
          >
            💬 PEDÍ POR WHATSAPP
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-red-950/30" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-orange-500 font-semibold mb-4">
              • HAMBURGUESAS PREMIUM •
            </p>

            <h2 className="text-6xl lg:text-8xl font-black leading-none">
              FRANK´S
            </h2>

            <h2 className="text-6xl lg:text-8xl font-black text-red-600 leading-none mt-2">
              BURGUER
            </h2>

            <p className="text-3xl font-bold mt-8">
              SABOR QUE TE HACE VOLVER
            </p>

            <p className="text-gray-400 mt-6 text-lg max-w-xl leading-relaxed">
              Carne 100% vacuna, ingredientes seleccionados y el toque
              de fuego que nos hace únicos.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="https://wa.me/543873120274"
                target="_blank"
                className="bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-xl font-bold text-lg"
              >
                💬 PEDÍ POR WHATSAPP
              </a>

              <button className="border border-orange-500 text-orange-500 px-8 py-4 rounded-xl font-bold hover:bg-orange-500 hover:text-black transition">
                VER MENÚ
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-14 text-sm">
              <div>
                <p className="font-bold text-orange-500">🚚 DELIVERY RÁPIDO</p>
                <p className="text-gray-400 mt-2">En todas nuestras zonas</p>
              </div>

              <div>
                <p className="font-bold text-orange-500">💳 PAGOS SEGUROS</p>
                <p className="text-gray-400 mt-2">Mercado Pago y Transferencia</p>
              </div>

              <div>
                <p className="font-bold text-orange-500">🍔 PEDÍ ONLINE</p>
                <p className="text-gray-400 mt-2">Fácil, rápido y seguro</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAH0AfQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL..."
              alt="Frank's Burguer"
              className="w-full max-w-[650px] drop-shadow-[0_0_40px_rgba(255,80,0,0.6)]"
            />
          </div>
        </div>
      </section>

      <section id="menu" className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-5xl font-black">
              NUESTRAS HAMBURGUESAS
            </h2>
            <p className="text-orange-500 mt-3">
              Elegidas por nuestros clientes
            </p>
          </div>

          <button className="border border-orange-500 px-6 py-3 rounded-xl font-bold hover:bg-orange-500 hover:text-black transition hidden lg:block">
            🍔 VER MENÚ COMPLETO
          </button>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {burgers.map((burger, index) => (
            <div
              key={index}
              className="bg-[#0b0b0b] border border-orange-500/10 rounded-2xl overflow-hidden hover:border-orange-500/50 transition"
            >
              <img
                src={burger.image}
                alt={burger.name}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-black">{burger.name}</h3>
                <p className="text-gray-400 mt-3 leading-relaxed">
                  {burger.description}
                </p>

                <div className="flex items-center justify-between mt-6">
                  <p className="text-orange-500 text-3xl font-black">
                    {burger.price}
                  </p>

                  <button className="border border-orange-500 px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-black transition">
                    🛒
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="combos"
        className="max-w-7xl mx-auto px-6 pb-20"
      >
        <div className="bg-gradient-to-r from-[#120000] to-[#1b0a00] border border-red-900/40 rounded-3xl p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="text-8xl">🍟🥤</div>

            <div>
              <h2 className="text-5xl font-black">COMBOS ESPECIALES</h2>
              <p className="text-orange-500 mt-3 text-xl">
                Hamburguesa + Papas + Bebida
              </p>
              <p className="text-gray-400 mt-4">
                Ahorrá más con nuestros combos premium.
              </p>
            </div>
          </div>

          <button className="border border-red-600 px-8 py-4 rounded-xl font-bold hover:bg-red-600 transition">
            🍔 VER COMBOS
          </button>
        </div>
      </section>

      <section
        id="sucursales"
        className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 xl:grid-cols-4 gap-6"
      >
        <div className="bg-[#0d0d0d] border border-orange-500/10 rounded-2xl p-8">
          <h3 className="text-xl font-black text-red-500">
            📍 ZONAS DE DELIVERY
          </h3>
          <p className="text-gray-400 mt-4 leading-relaxed">
            Sudeste / Zona Norte / Zona Oeste Baja / Zona Centro
          </p>
          <p className="text-orange-500 mt-4 font-bold">2 SUCURSALES</p>
        </div>

        <div className="bg-[#0d0d0d] border border-orange-500/10 rounded-2xl p-8">
          <h3 className="text-xl font-black text-red-500">
            💳 PAGÁ COMO QUIERAS
          </h3>
          <p className="text-gray-400 mt-4 leading-relaxed">
            Mercado Pago, Transferencia o pedido directo por WhatsApp.
          </p>
        </div>

        <div className="bg-[#0d0d0d] border border-orange-500/10 rounded-2xl p-8">
          <h3 className="text-xl font-black text-red-500">
            🔥 INGREDIENTES PREMIUM
          </h3>
          <p className="text-gray-400 mt-4 leading-relaxed">
            Calidad en cada detalle y sabor en cada bocado.
          </p>
        </div>

        <div className="bg-[#0d0d0d] border border-orange-500/10 rounded-2xl p-8">
          <h3 className="text-xl font-black text-red-500">
            ⚡ ATENCIÓN RÁPIDA
          </h3>
          <p className="text-gray-400 mt-4 leading-relaxed">
            Pedí fácil por WhatsApp y recibí tu pedido rápido.
          </p>
        </div>
      </section>

      <footer className="border-t border-red-900/30 py-8 text-center text-gray-500">
        © 2026 Frank´s BURGUER — Todos los derechos reservados.
      </footer>

      <a
        href="https://wa.me/543873120274"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 transition w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl"
      >
        💬
      </a>
    </div>
  );
}
