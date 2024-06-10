import CTA from "./cta"
import ChatIcon from "./icons/chat"
import PotteryIcon from "./icons/pottery"
import RocketIcon from "./icons/rocket"

export default function Process() {
  return (
    <section className="py-sectionPadding md:py-32 px-8 md:px-20 flex flex-col gap-12 md:gap-20 items-center bg-shade5">
      <div className="flex flex-col text-center gap-3 md:gap-6 max-w-screen-sm">
        <span className="section-info">Süreç</span>
        <h2>Süreç nasıl işliyor?</h2>
        <p>
          Mekanınızı sıradanlıktan çıkartıp misafirlerinizin içeri girdiği andan
          itibaren büyüleyen ve memnun eden unutulmaz bir ortam yaratma süreci
          nasıl işliyor?
        </p>
      </div>
      <div className="flex flex-col gap-8 md:flex-row md:[&>div]:w-[1/3] text-center md:text-balance">
        <div className="flex flex-col items-center gap-4">
          <ChatIcon
            style={{ width: 48, height: 48, color: "rgba(0,0,0,0.8)" }}
          />
          <p>
            Bize ulaşın ve vizyonunuzu, markanızı ve ihtiyaçlarınızı tartışalım.
            Sizin için en iyi stratejiyi isteğinize göre beraber planlayalım.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <PotteryIcon
            style={{ width: 48, height: 48, color: "rgba(0,0,0,0.8)" }}
          />

          <p>
            Markanız için en uygun, en yaratıcı parçaları yirmi yıllık
            profesyonel el işçiliğimizle üretelim, en kısa sürede size teslim
            edelim.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <RocketIcon
            style={{ width: 48, height: 48, color: "rgba(0,0,0,0.8)" }}
          />
          <p>
            Yeni ürünlerinizi işletmenizde kullanmaya başlayın, gelişmiş
            atmosferin tadını çıkarın ve müşterilerinizden aldığınız geri
            dönüşleri izleyin.
          </p>
        </div>
      </div>
      <CTA />
    </section>
  )
}
