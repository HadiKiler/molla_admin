import * as React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Title } from 'react-admin';

import { ListBase, WithListContext } from 'react-admin';
import { LineChart, Line , BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SalesChart = () => (
    <ListBase resource="sales_chart" disableSyncWithLocation perPage={100}>
        <WithListContext
            render={({ data }) => (
                <LineChart width={700} height={300} data={data}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                    <Line dataKey="sales" type="monotone" stroke="#8884d8" />
                </LineChart>
            )}
        />
    </ListBase>
);

const ProductChart = () => (
    <ListBase resource="product_chart" disableSyncWithLocation perPage={100}>
        <WithListContext render={({ data }) => (
          <BarChart width={700} height={300} data={data} margin={{   top: 5,   right: 30,   left: 20,   bottom: 5, }} barSize={20}>
            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="sales" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
            )}
        />
    </ListBase>
);



export default () => (
    <Card>
        <Title title="Welcome to the administration" />
        <CardContent>Total of all sales in recent months.</CardContent>
        <SalesChart/>
        
        <CardContent>Best selling products.</CardContent>
        <ProductChart/>
    </Card>
);