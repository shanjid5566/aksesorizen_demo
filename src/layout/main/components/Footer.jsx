import React from 'react'

export default function Footer(){
	const year = new Date().getFullYear()
	return (
		<footer className="bg-[#081222] text-gray-300">
			<div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div>
						<h3 className="text-white font-semibold text-lg">PaymentHub</h3>
						<p className="mt-3 text-sm text-slate-400">We make you website design.</p>
					</div>

					<div>
						<h4 className="text-white font-semibold mb-3">Product</h4>
						<ul className="space-y-2 text-base">
							<li><a className="hover:text-white" href="#">Features</a></li>
							<li><a className="hover:text-white" href="#">Pricing</a></li>
							<li><a className="hover:text-white" href="#">API</a></li>
						</ul>
					</div>

					<div>
						<h4 className="text-white font-semibold mb-3">Company</h4>
						<ul className="space-y-2 text-base">
							<li><a className="hover:text-white" href="#">About</a></li>
							<li><a className="hover:text-white" href="#">Blog</a></li>
							<li><a className="hover:text-white" href="#">Careers</a></li>
						</ul>
					</div>

					<div>
						<h4 className="text-white font-semibold mb-3">Legal</h4>
						<ul className="space-y-2 text-base">
							<li><a className="hover:text-white" href="#">Privacy</a></li>
							<li><a className="hover:text-white" href="#">Terms</a></li>
							<li><a className="hover:text-white" href="#">Security</a></li>
						</ul>
					</div>
				</div>

				<div className="mt-8 border-t border-slate-700 pt-8">
					<p className="text-center text-sm text-slate-400">© {year} PaymentHub. All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
}
