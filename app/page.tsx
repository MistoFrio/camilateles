import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Baby, Leaf, Phone, MessageCircle, Video } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary/10 to-background py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <Badge className="bg-secondary/10 text-secondary border-secondary/20 font-medium">
                Nutricionista Especializada
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-foreground leading-tight">
                Te ajudo a engravidar naturalmente e ter uma <span className="text-primary">gestação saudável</span>{" "}
                após os 30 anos
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Sou Camila Teles, nutricionista especializada em fertilidade feminina. Através de um acompanhamento
                personalizado, ajudo mulheres a realizarem o sonho da maternidade de forma natural e saudável.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-center lg:justify-start">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                  <Phone className="w-5 h-5 mr-2" />
                  Agendar Consulta
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-secondary text-secondary hover:bg-secondary hover:text-white bg-transparent"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar no WhatsApp
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/camila-profile.png"
                  alt="Camila Teles - Nutricionista especializada em fertilidade"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">Como posso te ajudar</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Ofereço acompanhamento nutricional especializado para cada fase da sua jornada
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-serif text-xl">Preparação para Engravidar</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  Protocolo nutricional personalizado para otimizar sua fertilidade e preparar seu corpo para uma
                  gestação saudável.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary/20 transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Baby className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="font-serif text-xl">Acompanhamento Gestacional</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  Nutrição especializada durante toda a gravidez, garantindo o desenvolvimento saudável do bebê e seu
                  bem-estar.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary/20 transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="font-serif text-xl">Nutrição Natural</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  Abordagem natural e holística, priorizando alimentos funcionais e suplementação adequada para cada
                  necessidade.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-8">Sobre Camila Teles</h2>
          <div className="space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              Sou nutricionista especializada em saúde da mulher, com foco especial em fertilidade e nutrição
              gestacional. Há mais de 8 anos ajudo mulheres a realizarem o sonho da maternidade através de uma abordagem
              nutricional personalizada e baseada em evidências científicas.
            </p>
            <p>
              Acredito que a nutrição é a base para uma fertilidade saudável e uma gestação tranquila. Meu trabalho vai
              além da prescrição de dietas - é um acompanhamento completo que considera suas necessidades individuais,
              histórico de saúde e objetivos pessoais.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-8">Vamos conversar?</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Estou aqui para te ajudar nessa jornada. Entre em contato e vamos começar a trabalhar juntas pelo seu sonho
            da maternidade.
          </p>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-12">
            <Card className="p-6">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold mb-2">Telefone</h3>
                  <p className="text-muted-foreground">+55 31 8250-8787</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold mb-2">Telegram</h3>
                  <p className="text-muted-foreground">Grupo Exclusivo</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Video className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold mb-2">TikTok</h3>
                  <p className="text-muted-foreground">@camilateles_nutri</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
            <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90" asChild>
              <a href="tel:+5531982508787">
                <Phone className="w-5 h-5 mr-2" />
                Ligar Agora
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-secondary text-secondary hover:bg-secondary hover:text-white bg-transparent"
              asChild
            >
              <a href="https://t.me/joinchat/LRbEB2QoWvdhMTEx" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Entrar no Telegram
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-secondary text-secondary hover:bg-secondary hover:text-white bg-transparent"
              asChild
            >
              <a href="https://www.tiktok.com/@camilateles_nutri" target="_blank" rel="noopener noreferrer">
                <Video className="w-5 h-5 mr-2" />
                Seguir no TikTok
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl sm:text-2xl font-serif font-bold mb-4">Camila Teles</h3>
          <p className="text-primary-foreground/80 mb-6">
            Nutricionista especializada em fertilidade e gestação saudável
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <span>CRN: 12345</span>
            <span>•</span>
            <span>Belo Horizonte, MG</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
