export default function Page(){
    return <p>Dashboard Page</p>
}

// export default function Page() {
//     return (
//       <div
//         style={{
//           fontFamily: `'Monaco', monospace`,
//           backgroundColor: '#C948F3', 
//           minHeight: '100vh',
//           padding: '40px',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//       >
//         <h1
//           style={{
//             fontSize: '50px',
//             marginBottom: '30px',
//             color: '#A16FF9', 
//             textShadow: '1px 1px 2px #000',
//           }}
//         >
//           🕹️ Dashboard
//         </h1>
  
//         <div
//           style={{
//             display: 'flex',
//             gap: '20px',
//             flexWrap: 'wrap',
//             justifyContent: 'center',
//             maxWidth: '800px',
//             width: '100%',
//           }}
//         >
//           {[
//             { label: 'Total Users', value: '1,250' },
//             { label: 'Active Sessions', value: '315' },
//             { label: 'New Signups', value: '67' },
//           ].map((item, index) => (
//             <div
//               key={index}
//               style={{
//                 flex: '1 1 200px',
//                 backgroundColor: '#E0FF03',
//                 color: '#8000ff',
//                 padding: '20px',
//                 borderRadius: '10px',
//                 boxShadow: '0 0 10px #8000ff',
//                 textAlign: 'center',
//                 fontSize: '14px',
//                 // textShadow: '1px 1px 2px #39FF14',
//               }}
//             >
//               <p>{item.label}</p>
//               <h2 style={{ margin: 0 }}>{item.value}</h2>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
  