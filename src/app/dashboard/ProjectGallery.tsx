'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// Importa los estilos de Swiper
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const images = [
  '/5.jpg',
  '/6.jpg',
  '/7.jpg',
  '/8.jpg',
  '/9.jpg',
  '/10.jpg',
  '/11.jpg'
]

export function ProjectGallery() {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Galería de Imágenes del Proyecto</CardTitle>
      </CardHeader>
      <CardContent>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={16}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // Cuando el ancho de la ventana es >= 320px
            320: {
              slidesPerView: 1,
            },
            // Cuando el ancho de la ventana es >= 640px
            640: {
              slidesPerView: 2,
            },
            // Cuando el ancho de la ventana es >= 1024px
            1024: {
              slidesPerView: 4,
            }
          }}
          className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <Image
                  src={src}
                  alt={`Imagen del proyecto ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </CardContent>
    </Card>
  )
}