import React, { useState, useRef, useEffect } from 'react'

// server
// import { connectDB, jparse } from '../../util/db'
// import { Product, Review } from '../../models'

export default function Item({ slug }) {
  return (
    <>
      <h1>page {slug} </h1>
    </>
  )
}

export async function getStaticProps(context) {
  let { slug } = context.params
  // await connectDB()
  // const product = await Product.findById(slug)
  // const allReviews = await Review.find({ productId: slug })
  // const reviews = allReviews.filter(review => {
  //   if (review.published) return true
  // })
  // return { props: { product: jparse(product), reviews: jparse(reviews), slug } }
  return { props: { slug } }
}

export async function getStaticPaths() {
  // await connectDB()
  // const products = await Product.find()
  // const paths = products.map(product => ({
  //   params: { slug: product._id }
  // }))
  const paths = [ {params: { slug: '1' }} ]
  console.log('/item/[slug]', paths)
  return { paths, fallback: false } // { fallback: false } means other routes should 404.
}