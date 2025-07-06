import Navigation from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, MessageCircle, Calendar, Heart, Shield, Star } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="georgian-text text-5xl md:text-6xl font-bold text-white mb-6">ჩვენს შესახებ</h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8" />
          <p className="georgian-text text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            ჰენესების ელიტარული ოჯახი
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-32">
        <div className="max-w-6xl mx-auto">
          {/* Top Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="bg-black/50 border-red-900/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="georgian-text text-2xl text-white flex items-center">
                  <Calendar className="w-6 h-6 mr-3 text-red-400" />
                  ისტორია
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="georgian-text text-gray-300 leading-relaxed">
                  ჰენესების ოჯახი შეიქმნა 2024 წლის ივნისში და დღემდე ინარჩუნებს ლიდერ პოზიციას Nexus RP-ს
                  საზოგადოებაში.
                </p>
                <p className="georgian-text text-gray-300 leading-relaxed">
                  ოჯახი დაყოფილია წოდებების მიხედვით, რაც ხელს უწყობს განვითარებასა და ერთმანეთის პატივისცემას.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-red-900/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="georgian-text text-2xl text-white flex items-center">
                  <Users className="w-6 h-6 mr-3 text-red-400" />
                  ღირებულებები
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="georgian-text text-gray-300 leading-relaxed">
                  ოჯახი სთავაზობს მეგობრულ გარემოს, ურთიერთ დაფასებას, განვითარებასა და ერთმანეთის მხარდაჭერას.
                </p>
                <p className="georgian-text text-gray-300 leading-relaxed">ძმობა და სიყვარული ერთია!</p>
              </CardContent>
            </Card>
          </div>

          {/* Requirements & Rules */}
          <Card className="bg-black/50 border-red-900/20 backdrop-blur-sm mb-16">
            <CardHeader>
              <CardTitle className="georgian-text text-3xl text-white text-center flex items-center justify-center">
                <Shield className="w-8 h-8 mr-3 text-red-400" />
                მოთხოვნები და წესები
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="georgian-text text-xl font-bold text-white mb-4 flex items-center">
                    <Star className="w-5 h-5 mr-2 text-red-400" />
                    გაწევრიანების პროცესი
                  </h3>
                  <ul className="georgian-text text-gray-300 space-y-2 list-disc list-inside">
                    <li>გასაუბრება RP და DISCORD სერვერზე.</li>
                    <li>საუბარი მხოლოდ ოჯახის ხელმძღვანელთან.</li>
                    <li>დადებითი გადაწყვეტილების შემდეგ მიღება.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="georgian-text text-xl font-bold text-white mb-4 flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-red-400" />
                    მოლოდინები
                  </h3>
                  <ul className="georgian-text text-gray-300 space-y-2 list-disc list-inside">
                    <li>პატივისცემა, ნდობა და მეგობრობა.</li>
                    <li>დავალებების ხარისხიანად შესრულება.</li>
                    <li>ოჯახის პრესტიჟის დაცვა.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-900/20 rounded-lg p-6 border border-red-900/30 text-center">
                <p className="georgian-text text-gray-200 leading-relaxed">
                  ხშირად ვმართავთ შეკრებებსა და განხილვებს როგორც RP, ასევე OOC განვითარებისთვის.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Video Section */}
          <div className="mb-24">
            <h2 className="georgian-text text-4xl font-bold text-white text-center mb-12">ვიდეო</h2>

            <Card className="bg-black/50 border-red-900/20 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0">
                {/* Responsive 16:9 YouTube embed */}
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.youtube.com/embed/iyWwG4Vd6vY"
                    title="Hennessy Dynasty RP"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="rounded-none"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Gallery */}
          <div className="mb-24">
            <h2 className="georgian-text text-4xl font-bold text-white text-center mb-12">ოჯახური მომენტები</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <img
                src="/images/hennessy-main.png"
                alt="Family Meeting"
                className="rounded-lg shadow-2xl border border-red-900/20 w-full h-64 object-cover"
              />
              <img
                src="/images/hennessy-street.png"
                alt="Street Line-up"
                className="rounded-lg shadow-2xl border border-red-900/20 w-full h-64 object-cover"
              />
              <img
                src="/images/hennessy-night.png"
                alt="Night Patrol"
                className="rounded-lg shadow-2xl border border-red-900/20 w-full h-64 object-cover"
              />
              <img
                src="/images/hennessy-luxury.png"
                alt="Luxury Life"
                className="rounded-lg shadow-2xl border border-red-900/20 w-full h-64 object-cover md:col-span-2 lg:col-span-3"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="georgian-text text-4xl font-bold text-white mb-6">მზად ხართ შემოგვიერთდეთ?</h2>
            <Button size="lg" asChild className="bg-red-600 hover:bg-red-700 text-xl px-12 py-6">
              <a href="https://discord.gg/AwyqxagxK5" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6 mr-3" />
                <span className="georgian-text">Discord-ში შემოერთება</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Spacer */}
      <div className="h-20" />
    </div>
  )
}
