import printSvg from '../Components/PrintSvg'

import jsSVG from '../Assets/javascript.svg'
import htmlSVG from '../Assets/html.svg'
import cssSVG from '../Assets/css.svg'
import phpSVG from '../Assets/php.svg'
import pythonSVG from '../Assets/python.svg'
import CSVG from '../Assets/c.svg'
import bashSVG from '../Assets/bash.svg'
import powShellSVG from '../Assets/powershell.svg'
import reactSVG from '../Assets/react.svg'
import symfonySVG from '../Assets/symfony.svg'
import nodeSVG from '../Assets/node.svg'

const s_js = printSvg(jsSVG,'jsLogo','32')
const s_html = printSvg(htmlSVG,'htmlLogo','32')
const s_css = printSvg(cssSVG,'cssLogo','32')
const s_php = printSvg(phpSVG,'phpLogo','32')
const s_python = printSvg(pythonSVG,'pythonLogo','32')
const s_c = printSvg(CSVG,'CLogo','32')
const s_bash = printSvg(bashSVG,'bashLogo','32')
const s_powShell = printSvg(powShellSVG,'PowerShellLogo','32')
const s_react = printSvg(reactSVG,'ReactLogo','32')
const s_symfony = printSvg(symfonySVG,'SymfonyLogo','32')
const s_node = printSvg(nodeSVG,'NodeLogo','32')

const b_js = printSvg(jsSVG,'jsLogo','64')
const b_html = printSvg(htmlSVG,'htmlLogo','64')
const b_css = printSvg(cssSVG,'cssLogo','64')
const b_php = printSvg(phpSVG,'phpLogo','64')
const b_python = printSvg(pythonSVG,'pythonLogo','64')
const b_c = printSvg(CSVG,'CLogo','64')
const b_bash = printSvg(bashSVG,'bashLogo','64')
const b_powShell = printSvg(powShellSVG,'PowerShellLogo','64')
const b_react = printSvg(reactSVG,'ReactLogo','64')
const b_symfony = printSvg(symfonySVG,'SymfonyLogo','64')
const b_node = printSvg(nodeSVG,'NodeLogo','64')


export const skillsList = [
	{
		name: 'JavaScript',
		category: "Language de développement Web",
		id: '1js',
		lvl: 'Intermédiaire',
		note: "",
		s_icon: s_js,
		b_icon: b_js
	},
	{
		name: 'HTML',
		category: "Language de développement Web",
		id: '2html',
		lvl: "Avancé",
		note: "",
		s_icon: s_html,
		b_icon: b_html
	},
    {
		name: 'CSS',
		category: "Language de développement Web",
		id: '3css',
		lvl: 'Intermédiaire',
		note: "",
		s_icon: s_css,
		b_icon: b_css

	},
	{
		name: 'PHP',
		category: 'Language de développement Web',
		id: '4php',
		lvl: "Intermédiaire",
		note: "",
		s_icon: s_php,
		b_icon: b_php
	},
    {
		name: 'Python',
		category: "Language de programmation",
		id: '5py',
		lvl: 'Intermédiaire',
		note: "",
		s_icon: s_python,
		b_icon: b_python
	},
	{
		name: "C / C++",
		category: 'Language de programmation',
		id: '6c',
		lvl: "Confirmé",
		note: "",
		s_icon: s_c,
		b_icon: b_c
	},
    {
		name: 'Bash / GNU Shell',
		category: "Interpréteur de commandes",
		id: '7ba',
		lvl: 'Débutant',
		note: "Interpréteur de commandes",
		s_icon: s_bash,
		b_icon: b_bash
	},
	{
		name: "PowerShell",
		category: 'Interpréteur de commandes',
		id: '8ps',
		lvl: "En apprentissage",
		note: "Interpréteur de commandes / Scripts",
		s_icon: s_powShell,
		b_icon: b_powShell
	},
    {
		name: 'Symfony ',
		category: "Framework",
		id: '9sy',
		lvl: "Débutant",
		note: "Framework PHP",
		s_icon: s_symfony,
		b_icon: b_symfony
	},
	{
		name: "React.js",
		category: 'Framework',
		id: '10rj',
		lvl: "Débutant",
		note: "Framework JavaScript",
		s_icon: s_react,
		b_icon: b_react
	},
    {
		name: "Node.js",
		category: 'Framework',
		id: '11nj',
		lvl: "En apprentissage",
		note: "Framework JavaScript fullstack",
		s_icon: s_node,
		b_icon: b_node
	},
	
]
