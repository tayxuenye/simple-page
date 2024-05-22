'use client';
import Image from "next/image";
import Link from 'next/link'
import BasicExample from "./components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <main>
      <BasicExample />
      <img src='https://t3.ftcdn.net/jpg/00/84/09/18/360_F_84091840_8wn1lAJ7jIuYRczt4PRqrrZUoAOoPVrO.jpg' />
      <p>Discounts of up to 100baht per bottle now! While stocks last.</p>
    </main>
  )
}
