{/ <table className={styles.customtable}>
<tbody>
  <tr>
  <td className="customtabletd text-center text-black ">
  <div className="inline-block bg-[#beb3e5] transition-transform transform hover:scale-105 rounded-full p-4 mt-4">
  <Menu as="div" className="relative inline-block text-left">
<div>
  <Menu.Button>
  <h2 className="font-['georgia'] text-1.6rem font-bold">Python</h2>
  
  </Menu.Button>
</div>
</Menu>

</div>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop:'3rem' }}>
<Box sx={{ width: 300 }}>
<Slider
aria-label="Always visible"
defaultValue={80}
getAriaValueText={valuetext}
step={10}
marks={marks}
valueLabelDisplay="on"
disabled
/>
</Box>
</div>
</td>
<td className="customtabletd text-center text-black ">
<div className="inline-block bg-[#beb3e5] transition-transform transform hover:scale-105 rounded-full p-4 mt-4">
<Menu as="div" className="relative inline-block text-left">
<div>
<Menu.Button>
<h2 className="font-['georgia'] text-1.6rem font-bold">Database</h2>

</Menu.Button>
</div>

<Transition
as={Fragment}
enter="transition ease-out duration-100"
enterFrom="transform opacity-0 scale-95"
enterTo="transform opacity-100 scale-100"
leave="transition ease-in duration-75"
leaveFrom="transform opacity-100 scale-100"
leaveTo="transform opacity-0 scale-95"
>
<Menu.Items >
<div className="py-1 text-white">
<Menu.Item>
{({ active }) => (
<a
href="#"
className={classNames(
active ? 'bg-gray-100 text-gray-900' : 'text-blue-700',
'block px-4 py-2 text-sm'
)}
>
<div className="p-10rem bg-sky-500/50 py-10 ss decoration-[#50d71e] ">
<p>- Word</p>
<p>- Excel</p>
<p>- Powerpoint</p>
<p>- OutLook</p>
</div>
</a>
)}
</Menu.Item>
</div>
</Menu.Items>
</Transition>
</Menu>

</div>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop:'3rem' }}>
<Box sx={{ width: 300 }}>
<Slider
aria-label="Always visible"
defaultValue={80}
getAriaValueText={valuetext}
step={10}
marks={marks}
valueLabelDisplay="on"
disabled
/>
</Box>
</div>
</td>
</tr>
</tbody>

<tbody>
<tr>
<td className="customtabletd text-center text-black ">
<div className="inline-block bg-[#beb3e5] transition-transform transform hover:scale-105 rounded-full p-4 mt-4">
<h2 className="font-['georgia'] text-1.6rem font-bold">Wireshark</h2>
</div>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop:'3rem' }}>
<Box sx={{ width: 300 }}>
<Slider
aria-label="Always visible"
defaultValue={60}
getAriaValueText={valuetext}
step={10}
marks={marks}
valueLabelDisplay="on"
disabled
/>
</Box>
</div>
</td>
<td className="customtabletd text-center text-black ">
<div className="inline-block bg-[#beb3e5] transition-transform transform hover:scale-105 rounded-full p-4 mt-4">
<Menu as="div" className="relative inline-block text-left">
<div>
<Menu.Button>
<h2 className="font-['georgia'] text-1.6rem font-bold">HTML</h2>

</Menu.Button>
</div>


</Menu>

</div>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop:'3rem' }}>
<Box sx={{ width: 300 }}>
<Slider
aria-label="Always visible"
defaultValue={60}
getAriaValueText={valuetext}
step={10}
marks={marks}
valueLabelDisplay="on"
disabled
/>
</Box>
</div>
</td>
</tr>
</tbody>

<tbody>
<tr>
<td className="customtabletd text-center text-black ">
<div className="inline-block bg-[#beb3e5] transition-transform transform hover:scale-105 rounded-full p-4 mt-4">
<Menu as="div" className="relative inline-block text-left">
<div>
<Menu.Button>
<h2 className="font-['georgia'] text-1.6rem font-bold">Java</h2>

</Menu.Button>
</div>


</Menu>

</div>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop:'3rem' }}>
<Box sx={{ width: 300 }}>
<Slider
aria-label="Always visible"
defaultValue={50}
getAriaValueText={valuetext}
step={10}
marks={marks}
valueLabelDisplay="on"
disabled
/>
</Box>
</div>
</td>
<td className="customtabletd text-center text-black ">
<div className="inline-block bg-[#beb3e5] transition-transform transform hover:scale-105 rounded-full p-4 mt-4">
<Menu as="div" className="relative inline-block text-left">
<div>
<Menu.Button>
<h2 className="font-['georgia'] text-1.6rem font-bold">CSS</h2>

</Menu.Button>
</div>


</Menu>

</div>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop:'3rem' }}>
<Box sx={{ width: 300 }}>
<Slider
aria-label="Always visible"
defaultValue={60}
getAriaValueText={valuetext}
step={10}
marks={marks}
valueLabelDisplay="on"
disabled
/>
</Box>
</div>
</td>
</tr>
</tbody>

<tbody>
<tr>
<td className="customtabletd text-center text-black ">
<div className="inline-block bg-[#beb3e5] transition-transform transform hover:scale-105 rounded-full p-4 mt-4">
<Menu as="div" className="relative inline-block text-left">
<div>
<Menu.Button>
<h2 className="font-['georgia'] text-1.6rem font-bold">Operating System</h2>
</Menu.Button>
</div>
<Transition
as={Fragment}
enter="transition ease-out duration-100"
enterFrom="transform opacity-0 scale-95"
enterTo="transform opacity-100 scale-100"
leave="transition ease-in duration-75"
leaveFrom="transform opacity-100 scale-100"
leaveTo="transform opacity-0 scale-95"
>
<Menu.Items >
<div className="py-1 text-white">
<Menu.Item>
{({ active }) => (
<a
href="#"
className={classNames(
active ? 'bg-gray-100 text-gray-900' : 'text-black',
'block px-4 py-2 text-sm'
)}
>
<div className="p-10rem py-10 ss decoration-[#50d71e] ">
<p>- Microsoft</p>
<p>- Mac</p>
<p>- Linux</p>
</div>
</a>
)}
</Menu.Item>
</div>
</Menu.Items>
</Transition>
</Menu>
</div>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop:'3rem' }}>
<Box sx={{ width: 300 }}>
<Slider
aria-label="Always visible"
defaultValue={20}
getAriaValueText={valuetext}
step={10}
marks={marks}
valueLabelDisplay="on"
disabled
/>
</Box>
</div>
</td>
<td className="customtabletd text-center text-black ">
<div className="inline-block bg-[#beb3e5] transition-transform transform hover:scale-105 rounded-full p-4 mt-4">
<Menu as="div" className="relative inline-block text-left">
<div>
<Menu.Button>
<h2 className="font-['georgia'] text-1.6rem font-bold">Microsoft</h2>

</Menu.Button>
</div>

<Transition
as={Fragment}
enter="transition ease-out duration-100"
enterFrom="transform opacity-0 scale-95"
enterTo="transform opacity-100 scale-100"
leave="transition ease-in duration-75"
leaveFrom="transform opacity-100 scale-100"
leaveTo="transform opacity-0 scale-95"
>
<Menu.Items >
<div className="py-1 text-white">
<Menu.Item>
{({ active }) => (
<a
href="#"
className={classNames(
active ? 'bg-gray-100 text-gray-900' : 'text-blue-700',
'block px-4 py-2 text-sm'
)}
>
<div className="p-10rem bg-sky-500/50 py-10 ss decoration-[#50d71e] ">
<p>- Word</p>
<p>- Excel</p>
<p>- Powerpoint</p>
<p>- OutLook</p>
</div>
</a>
)}
</Menu.Item>
</div>
</Menu.Items>
</Transition>
</Menu>

</div>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop:'3rem' }}>
<Box sx={{ width: 300 }}>
<Slider
aria-label="Always visible"
defaultValue={80}
getAriaValueText={valuetext}
step={10}
marks={marks}
valueLabelDisplay="on"
disabled
/>
</Box>
</div>
</td>
</tr>
</tbody>

</table>/}
