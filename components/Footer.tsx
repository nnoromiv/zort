import { LOGO } from '@/images'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <footer>
            <section className="w-full footer sm:footer-horizontal bg-gradient-to-b from-light-white from-0% to-black to-100% text-light-white grid-rows-2 p-10 max-sm:p-4">
                <aside>
                    <Image
                        width={100}
                        height={100}
                        src={LOGO}
                        alt='logo'
                    />
                    <p>
                        Zort Ltd.
                        <br />
                        Providing reliable tech since 2008
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <a className="link link-hover">Twitter</a>
                    <a className="link link-hover">Instagram</a>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">GitHub</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Explore</h6>
                    <a className="link link-hover">Features</a>
                    <a className="link link-hover">Enterprise</a>
                    <a className="link link-hover">Security</a>
                    <a className="link link-hover">Pricing</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Apps</h6>
                    <a className="link link-hover">Mac</a>
                    <a className="link link-hover">Windows</a>
                    <a className="link link-hover">iPhone</a>
                    <a className="link link-hover">Android</a>
                </nav>
            </section>

            <aside className='p-4 bg-black text-white text-center'>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Zort Ltd</p>
            </aside>
        </footer>
    )
}

export default Footer