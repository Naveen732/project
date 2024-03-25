import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';
function Home() {
    const [data, setData] = useState([]);


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('data.json');
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>SUBJECTS</h3>
                </div>
                
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>GRADES</h3>
                </div>
                
            </div>
            
            <div className='card'>
                <div className='card-inner'>
                    <h3>SEMESTER</h3>
                </div>
                
            </div>

                
            </div>

            <div className='charts'>
                <ResponsiveContainer width="100%" height="50%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="register_number" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="semesters[0].credits" name="Semester 1 Credits" fill="#8884d8" />
                        <Bar dataKey="semesters[1].credits" name="Semester 2 Credits" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
                
                <ResponsiveContainer width="100%" height="50%">
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="register_number" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="semesters[0].credits" name="Semester 1 Credits" stroke="#8884d8" />
                        <Line type="monotone" dataKey="semesters[1].credits" name="Semester 2 Credits" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </main>
    );
}

export default Home;
