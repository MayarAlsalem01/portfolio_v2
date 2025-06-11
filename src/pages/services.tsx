'use client'
import Service from '@/components/Service/Service'
import Stairs from '@/components/Staris'
import StrokeText from '@/components/StrokeText'
import React, { useRef } from 'react'
import Blob from '../components/Blob/Blob'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import Head from 'next/head'

export default function Services() {
    const serv1 = useRef(null)
    const serv2 = useRef(null)
    const serv3 = useRef(null)
    const serv4 = useRef(null)

    return (

        <main>
            <Stairs>
                <Head>
                    <title>Services | Mayar Alsalem</title>
                    <meta name="description" content="Front-End Development, Performance Optimization, Type-Safe Codebases, and Design-to-Code services by Mayar Alsalem." />
                    <link rel="canonical" href="https://mayaralsalem.vercel.app/services" />
                    <script type="application/ld+json" dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "ProfessionalService",
                            name: "Mayar Alsalem",
                            serviceType: ["Front-End Development", "Performance Optimization", "Type-Safe Codebases", "Design-to-Code"],
                            url: "https://mayaralsalem.vercel.app/services"
                        })
                    }} />
                </Head>
                <div className=' relative flex flex-col items-center gap-10  '>
                    <div className='basis-1/2 self-start sticky top-4 left-0 md:left-10 !pt-4 !pl-6 text-4xl font-bold'>
                        <SectionTitle>Services</SectionTitle>
                    </div>
                    <div className=' flex flex-col items-start !px-3 lg:!px-98 relative -top-20'>
                        <section className='h-screen flex justify-center items-center sticky top-0   '>
                            <Service ref={serv1} index={1} header='Modern Front-End Development' body='I build responsive, accessible, and high-performance UIs using React.js, Next.js, and Tailwind CSS — focused on real-world scalability and clean architecture.' />

                        </section>
                        <section className='h-screen flex justify-center items-center sticky top-0 '>
                            <Service ref={serv2} index={2} header='Performance Optimization.' body='Fast websites keep users engaged. I optimize Core Web Vitals, reduce bundle sizes, and lazy load assets to boost speed across all devices.' />

                        </section>
                        <section className='h-screen flex justify-center items-center sticky top-0 '>
                            <Service ref={serv3} index={3} header='Type-Safe Codebases.' body='Say goodbye to runtime bugs. I use TypeScript to write predictable, maintainable, and developer-friendly code that scales with your team and project.' />

                        </section>
                        <section className='h-screen flex justify-center items-center sticky top-0 '>
                            <Service ref={serv4} index={4} header='Design to Code.' body='Got a Figma, Sketch, or Adobe XD design? I turn static mockups into responsive, pixel-perfect, production-ready websites.' />

                        </section>
                    </div>

                </div>
                <div className='fixed top-1/2 opacity-50'>
                    <Blob />
                </div>
                <div className='fixed top-1/2 left-1/2 -translate-x-1/2 '>
                    <div className='text-7xl opacity-50'>
                        <StrokeText  >Mayar Alsalem</StrokeText>
                    </div>
                </div>
            </Stairs>
        </main>
    )
}


