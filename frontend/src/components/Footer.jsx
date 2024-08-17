import React from 'react'

const Footer = () => {
    return (

        <footer class="bg-slate-950 text-white py-8 mt-16">
            <div class="container flex w-full flex-wrap justify-between items-start px-4">
                <div class="  mb-4 md:mb-0">
                    <h2 class="text-2xl font-bold mb-4">Abstract</h2>
                    <ul class="list-none">
                        <li><a href="#" class=" hover:text-white">Branches</a></li>
                    </ul>
                </div>
                <div class="  mb-4 md:mb-0">
                    <h2 class="text-2xl font-bold mb-4">Resources</h2>
                    <ul class="list-none">
                        <li><a href="#" class=" hover:text-white">Blog</a></li>
                        <li><a href="#" class=" hover:text-white">Help Center</a></li>
                        <li><a href="#" class=" hover:text-white">Release Notes</a></li>
                        <li><a href="#" class=" hover:text-white">Status</a></li>
                    </ul>
                </div>
                <div class=" mb-4 md:mb-0">
                    <h2 class="text-2xl font-bold mb-4">Community</h2>
                    <ul class="list-none">
                        <li><a href="#" class=" hover:text-white">Twitter</a></li>
                        <li><a href="#" class=" hover:text-white">LinkedIn</a></li>
                        <li><a href="#" class=" hover:text-white">Facebook</a></li>
                        <li><a href="#" class=" hover:text-white">Dribbble</a></li>
                        <li><a href="#" class=" hover:text-white">Podcast</a></li>
                    </ul>
                </div>
                <div class="  mb-4 md:mb-0">
                    <h2 class="text-2xl font-bold mb-4">Company</h2>
                    <ul class="list-none">
                        <li><a href="#" class=" hover:text-white">About Us</a></li>
                        <li><a href="#" class=" hover:text-white">Careers</a></li>
                        <li><a href="#" class=" hover:text-white">Legal</a></li>

                    </ul>
                    <h2 class="text-xl font-bold my-2">Contact Us</h2>
                    <p class=" mb-2">info@abstract.com</p>

                </div>

                <div  class=" mb-4 md:mb-0 ">
                    
                    <p class=" mb-2">© Copyright 2022 Abstract Studio Design, Inc.</p>
                    <p class="">All rights reserved.</p>
                </div>
            </div>
        </footer>

    )
}

export default Footer
