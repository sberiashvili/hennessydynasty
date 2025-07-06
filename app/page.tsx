import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Users } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <HeroSection />

      {/* About Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="georgian-text text-4xl md:text-5xl font-bold text-white mb-6">ჩვენს შესახებ</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-black/50 border-red-900/20 backdrop-blur-sm">
                <CardContent className="p-8">
                  <p className="georgian-text text-lg text-gray-300 leading-relaxed mb-6">
                    ჰენესების ოჯახი შეიქმნა 2024 წლის ივნისს და აქტუალური აქტივი უკავია დღესდღეისობით.
                  </p>
                  <p className="georgian-text text-lg text-gray-300 leading-relaxed mb-6">
                    ოჯახიში მისაღებად არის საჭირო გასაუბრება, როგორც რპ, ასევე დისქორდ სერვერის მეშვეობით.
                  </p>
                  <p className="georgian-text text-lg text-gray-300 leading-relaxed mb-8">ძმობა და სიყვარული ერთია!</p>
                  <Button asChild className="bg-red-600 hover:bg-red-700">
                    <a href="/about">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="georgian-text">მეტის ნახვა</span>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/hennessy-street.png"
                alt="Hennessy Family"
                className="rounded-lg shadow-2xl border border-red-900/20"
              />
              <img
                src="/images/hennessy-night.png"
                alt="Hennessy Family"
                className="rounded-lg shadow-2xl border border-red-900/20"
              />
              <img
                src="/images/hennessy-luxury.png"
                alt="Hennessy Family"
                className="rounded-lg shadow-2xl border border-red-900/20 col-span-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/20 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="georgian-text text-4xl md:text-5xl font-bold text-white mb-6">მზად ხართ შემოგვიერთდეთ?</h2>
          <p className="georgian-text text-xl text-gray-300 mb-8 leading-relaxed">
            ჰენესების ოჯახში შემოერთება მოითხოვს ნდობას, პატივისცემას და ერთგულებას
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="bg-red-600 hover:bg-red-700 text-xl px-12 py-6">
              <a href="https://discord.gg/AwyqxagxK5" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6 mr-3" />
                <span className="georgian-text">DISCORD სერვერი</span>
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white text-xl px-12 py-6 bg-transparent"
            >
              <a
                href="https://www.youtube.com/@HennessyDynastyRP?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <span className="georgian-text">YOUTUBE არხი</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-red-900/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <span className="georgian-text text-2xl font-bold text-white">ჰენესების დინასტია</span>
          </div>
          <p className="georgian-text text-gray-400 mb-4">Nexus RP - GTA 5 </p>
          <p className="georgian-text text-gray-500 text-sm">© 2025 ჰენესების დინასტია. ყველა უფლება დაცულია.</p>
        </div>
      </footer>
    </div>
  )
}
