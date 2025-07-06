import Navigation from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, X, Shield, Ban } from "lucide-react"

const blacklistedMembers = [
  "Roma Hennessy",
  "Tato Zveradze",
  "Federico Hennessy",
  "Svani Hennessy",
  "Akira Hennessy",
  "Felix Hennessy",
  "Sani Hennessy",
  "Lukas Spacey",
  "Muro Hennessy",
  "Nika Hennessy",
  "Ghania Official",
  "Isoroku Hennessy",
  "Joze Hennessy",
  "Iko Hennessy",
  "Alister Hennessy",
  "Dimitri Hennessy",
]

export default function BlacklistPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <Navigation />

      {/* HERO */}
      <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 via-black to-black" />
        {/* hero content */}
        <div className="relative max-w-6xl mx-auto text-center">
          <Ban className="w-20 h-20 text-red-500 mx-auto mb-6 animate-pulse" />
          <h1 className="georgian-text text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight">შავი სია</h1>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-px bg-red-600 w-16" />
            <X className="w-6 h-6 text-red-500" />
            <div className="h-px bg-red-600 w-16" />
          </div>
        </div>{" "}
        {/* <-- ADDED this line to properly close the relative container */}
      </section>

      {/* MAIN CONTENT */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* warning banner */}
          <div className="mb-12">
            <Card className="bg-gradient-to-r from-red-900/30 to-red-800/20 border-red-500/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <AlertTriangle className="w-12 h-12 text-red-400 mr-4" />
                  <h2 className="georgian-text text-3xl font-bold text-white">გაფრთხილება</h2>
                </div>
                <p className="georgian-text text-lg text-gray-200 text-center leading-relaxed">
                  ქვემოთ მოცემული პირები სამუდამოდ არიან გაძევებული ჰენესების ოჯახიდან!
                </p>
              </CardContent>
            </Card>
          </div>

          {/* blacklisted members grid */}
          <h3 className="georgian-text text-3xl font-bold text-white text-center mb-8 flex items-center justify-center">
            <Shield className="w-8 h-8 mr-3 text-red-400" />
            გაძევებული წევრები
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {blacklistedMembers.map((member) => (
              <Card
                key={member}
                className="bg-black/70 border-red-900/40 hover:border-red-700/60 transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-900/50 rounded-full flex items-center justify-center group-hover:bg-red-800/60 transition-colors">
                      <X className="w-6 h-6 text-red-400" />
                    </div>
                    <div className="flex-1">
                      <p className="georgian-text text-lg font-semibold text-gray-300 line-through">{member}</p>
                      <p className="text-sm text-red-400 mt-1">გაძევებული</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* reason section */}
          <Card className="bg-gradient-to-br from-red-900/20 via-black to-red-800/10 border-red-900/30 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <CardTitle className="georgian-text text-4xl text-white flex items-center justify-center">
                <AlertTriangle className="w-10 h-10 mr-4 text-red-500" />
                გაძევების მიზეზები
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="georgian-text text-xl text-gray-200 leading-relaxed text-center mb-8">
                ოჯახის წევრის უპატივცემულობა, დაუდევრობა, ტყუილი, გარე პოლიტიკის არეულობა, შეურაწყოფა ოჯახის წევრების
                მიმართ. ეს ყველაფერი ეწინააღმდეგება ოჯახის სტანდარტებს!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "უპატივცემულობა", desc: "ოჯახის წევრების და ხელმძღვანელობის მიმართ უპატივცემულო ქცევა." },
                  { title: "დაუდევრობა", desc: "ოჯახის წესებისა და ინსტრუქციების იგნორირება." },
                  { title: "ტყუილი", desc: "ცრუ ინფორმაციის გავრცელება და წევრების მოტყუება." },
                  { title: "შეურაწყოფა", desc: "ოჯახის რეპუტაციის შელახვა და წევრების შეურაწყოფა." },
                ].map((item) => (
                  <div key={item.title} className="bg-black/40 rounded-lg p-6 border border-red-900/20">
                    <h4 className="georgian-text text-lg font-bold text-red-400 mb-3">{item.title}</h4>
                    <p className="georgian-text text-gray-300 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* final notice */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-red-900/30 via-red-800/20 to-red-900/30 rounded-2xl p-8 border border-red-700/40">
              <Ban className="w-16 h-16 text-red-500 mx-auto mb-6" />
              <h3 className="georgian-text text-3xl font-bold text-white mb-4">საბოლოო გადაწყვეტილება</h3>
              <p className="georgian-text text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                ამ სიაში მოხვედრა ნიშნავს სამუდამო გაგდებას ჰენესების ოჯახიდან. გადაწყვეტილება საბოლოოა და არ
                ექვემდებარება გადახედვას.
              </p>
              <div className="mt-6 flex items-center justify-center space-x-2 text-red-400">
                <X className="w-5 h-5" />
                <span className="georgian-text font-bold">დაბრუნება შეუძლებელია</span>
                <X className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer spacer */}
      <div className="h-20" />
    </div>
  )
}
