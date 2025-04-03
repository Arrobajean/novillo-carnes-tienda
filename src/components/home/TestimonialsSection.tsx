
export const TestimonialsSection = () => {
  return (
    <section className="py-16 px-4 bg-novillo-brown text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-serif font-semibold mb-10 text-center">Lo Que Dicen Nuestros Clientes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="Cliente" 
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-medium">Roberto Méndez</h4>
                <p className="text-sm text-gray-300">Cliente desde 2018</p>
              </div>
            </div>
            <p className="italic">
              "La calidad de la carne es extraordinaria. Siempre encuentro cortes frescos y el servicio es excelente. Mi carnicería de confianza."
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <img 
                src="https://randomuser.me/api/portraits/women/44.jpg" 
                alt="Cliente" 
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-medium">Carolina Vega</h4>
                <p className="text-sm text-gray-300">Cliente desde 2020</p>
              </div>
            </div>
            <p className="italic">
              "Sus promociones familiares son perfectas para nuestros asados de fin de semana. Siempre recomiendo El Novillo a mis amigos y familiares."
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <img 
                src="https://randomuser.me/api/portraits/men/67.jpg" 
                alt="Cliente" 
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-medium">Javier Soto</h4>
                <p className="text-sm text-gray-300">Cliente desde 2015</p>
              </div>
            </div>
            <p className="italic">
              "Como chef, valoro la consistencia en la calidad. El Novillo nunca me ha decepcionado, sus cortes son siempre de primera categoría."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
