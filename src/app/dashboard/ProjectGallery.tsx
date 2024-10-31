'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

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
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="h-[400px]"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <Image
                  src={src}
                  alt={`Imagen del proyecto ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </CardContent>
    </Card>
  )
}