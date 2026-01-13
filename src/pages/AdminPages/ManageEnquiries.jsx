import React, { useContext, useEffect, useState } from 'react'
import { Authentication } from '../../contex/AuthContex'
import Sidebar from '../../components/Sidebar'
import Aheader from './Aheader'
import axios from 'axios'



export default function ManageEnquiries() {

const {message,user}=useContext(Authentication)
  const token = localStorage.getItem("token")
  const [data, setData] = useState([]);

  useEffect(()=>{
       
  
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:1200/query",  {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
    
    }, []);




const handleRead = async (id) => {
  try {
    const res = await axios.put(
      `http://localhost:1200/query/${id}`,
      { status: 'Read' },   // sirf status bhejo
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (res.status === 200) {
      // ✅ Frontend state update (MOST IMPORTANT)
      setData(prevData =>
        prevData.map(item =>
          item._id === id
            ? { ...item, status: 'Read' }
            : item
        )
      );
    }

  } catch (error) {
    console.log(error.response?.data || error.message);
  }
};


  return (
   <div style={{display:'flex'}}>
           <div><Sidebar></Sidebar></div>
                {message && <p>{message}</p>}
      {user && (

       <div style={{marginLeft: 'calc(190px + 5%)',width: '70%',marginTop:'5px' }}>
        <Aheader></Aheader>
     

<h3 style={{marginTop:'50px'}}>Manage Enquires</h3>

<table style={styles.table}>
  <thead>
    <tr>
      <th style={styles.th}>Name</th>
      <th style={styles.th}>email</th>
      <th style={styles.th}>subject</th>
       <th style={styles.th}>Description</th>
        <th style={styles.th}>posting date</th>
       <th style={styles.th}>Status</th>


    </tr>
  </thead>

  <tbody>
    {data.map((item) => (
      <tr key={item._id}>
        <td style={styles.td}>{item.name}</td>
        <td style={styles.td}>{item.email}</td>
        <td style={styles.td}>{item.subject}</td>
        <td style={styles.messageTd}>{item.message}</td>
        <td style={styles.td}>{new Date(item.date).toLocaleString('en-GB', { hour12: false })}</td>
         <td style={styles.td}>
  <span
  style={item.status === 'Read' ? styles.readText : styles.pendingText}
  onClick={() => item.status !== 'Read' && handleRead(item._id)}
>
  {item.status || 'Pending'}
</span>
</td>

      </tr>
    ))}
  </tbody>
</table>





      
       </div>

       
       )}

     
      
         
       </div>
  )
}
const styles = {
  table: {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: '0',
    backgroundColor: 'white',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    margin: '2rem 0',
  },
  
  th: {
    backgroundColor: '#3b82f6',
    color: 'white',
    fontWeight: '600',
    fontSize: '0.95rem',
    padding: '1rem 1.5rem',
    textAlign: 'left',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    borderBottom: '2px solid #2563eb',
    position: 'sticky',
    top: '0',
    zIndex: '10',
  },
  
  td: {
    padding: '1rem 1.5rem',
    fontSize: '0.95rem',
    color: '#334155',
    borderBottom: '1px solid #e2e8f0',
    transition: 'background-color 0.2s ease',
  },
  
  messageTd: {
    padding: '1rem 1.5rem',
    fontSize: '0.95rem',
    color: '#334155',
    borderBottom: '1px solid #e2e8f0',
    maxWidth: '300px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  
  messageTdHover: {
    backgroundColor: '#f8fafc',
    whiteSpace: 'normal',
    maxWidth: 'none',
    overflow: 'visible',
    position: 'relative',
    zIndex: '5',
  },
  
  // Row hover effect
  tr: {
    transition: 'background-color 0.2s ease',
  },
  
  trHover: {
    backgroundColor: '#f8fafc',
  },
  
  // Status styles
  readText: {
    backgroundColor: '#d1fae5',
    color: '#065f46',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    fontWeight: '500',
    display: 'inline-block',
  },
  
  pendingText: {
    backgroundColor: '#fef3c7',
    color: '#92400e',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    fontWeight: '500',
    display: 'inline-block',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  
  pendingTextHover: {
    backgroundColor: '#fde68a',
    transform: 'translateY(-1px)',
  },
  
  // Responsive styles
  tableContainer: {
    overflowX: 'auto',
    borderRadius: '12px',
    margin: '2rem 0',
    backgroundColor: 'white',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  },
  
  emptyState: {
    textAlign: 'center',
    padding: '3rem',
    color: '#64748b',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  },
  
  loadingState: {
    textAlign: 'center',
    padding: '2rem',
    color: '#64748b',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  },
  
  // Mobile responsive adjustments
  '@media (max-width: 768px)': {
    table: {
      fontSize: '0.875rem',
    },
    th: {
      padding: '0.75rem 1rem',
      fontSize: '0.85rem',
    },
    td: {
      padding: '0.75rem 1rem',
      fontSize: '0.85rem',
    },
    messageTd: {
      padding: '0.75rem 1rem',
      fontSize: '0.85rem',
      maxWidth: '200px',
    },
  },
  
  '@media (max-width: 480px)': {
    table: {
      fontSize: '0.8rem',
    },
    th: {
      padding: '0.5rem 0.75rem',
      fontSize: '0.8rem',
    },
    td: {
      padding: '0.5rem 0.75rem',
      fontSize: '0.8rem',
    },
    messageTd: {
      padding: '0.5rem 0.75rem',
      fontSize: '0.8rem',
      maxWidth: '150px',
    },
  },
};