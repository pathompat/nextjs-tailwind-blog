import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'

export default function About() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img src={siteMetadata.image} alt="avatar" className="w-48 h-48 rounded-full" />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">Software Engineer</div>
            <div className="text-gray-500 dark:text-gray-400">Aston International</div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
              <SocialIcon kind="github" href={siteMetadata.github} />
              <SocialIcon kind="facebook" href={siteMetadata.facebook} />
              {/* <SocialIcon kind="youtube" href={siteMetadata.youtube} /> */}
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
              {/* <SocialIcon kind="twitter" href={siteMetadata.twitter} /> */}
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;สวัสดีครับ ผมชื่อปฐมภัทร์ สูงปานเขาทำงานเป็น Software Developer อยู่ที่บริษัท Aston International
              ทำหน้าที่พัฒนาระบบหลังบ้านทั้งการจัดการออเดอร์เข้าออก ระบบลูกค้าสัมพันธ์ (CRM) ระบบบริการคลังสินค้าและ
              Quality Control ดูแลทั้งระบบเป็น Fullstack Developer รวมทั้งดูแล Cloud Server ไม่ให้เกิดปัญหา 
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ผมจบการศึกษาจากมหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ สาขาวิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์
              ตอนเรียนสนใจด้าน Web Developer เป็นหลักแต่ก็ได้ทำโปรเจคหลายหลายทั้งด้าน IOT, Data Analytic หรือ
              System Engineering
            </p>
            <h3>ความสนใจ</h3>
            <p>
              <li>Big Data, Analytics, Machine Learning</li>
              <li>Crypto Currency, Decentralized Finance</li>
            </p>
            <h3>กิจกรรมยามว่าง</h3>
            <p>
              <li>เล่นกีตาร์</li>
              <li>เล่นเกม</li>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
