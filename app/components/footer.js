import React from 'react'
import Link from 'next/link'
export default function footer() {
  return (
    <footer >
    <div class="footer-container">
        <div class="sec aboutus">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quisquam minus quo illo numquam vel incidunt pariatur hic commodi expedita tempora praesentium at iure fugiat ea, quam laborum aperiam veritatis.</p>
            {/* <ul class="sci">
                <li><Link href="#"><i class="bx bxl-facebook"></i></Link></li>
                <li><Link href="#"><i class="bx bxl-instagram"></i></Link></li>
                <li><Link href="#"><i class="bx bxl-twitter"></i></Link></li>
                <li><Link href="#"><i class="bx bxl-linkedin"></i></Link></li>
            </ul> */}
        </div>
        <div class="sec quicklinks">
            <h2>Quick Links</h2>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="#">About</Link></li>
            </ul>
        </div>
        <div class="sec contactBx">
            <h2>Contact Info</h2>
            <ul class="info">
                <li>
                    <span><i class='bx bxs-map'></i></span>
                    <span> 123 Patel House <br/> New Delhi  <br/>India</span>
                </li>
                <li>
                    <span><i class='bx bx-envelope' ></i></span>
                    <p><Link href='#' ></Link>sample@gmail.com</p>
                </li>
            </ul>
        </div>
    </div>
</footer>
  )
}
