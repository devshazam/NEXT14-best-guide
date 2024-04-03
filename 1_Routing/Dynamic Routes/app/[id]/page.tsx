"use client"
import React, { Suspense} from "react";
import {Result } from 'antd';


export default function Item({ params }: { params: { id: string } }) {
console.log('params', params)
    const id = params.id || '';
          
    return (
        <>
        {!!id &&
            <Result
            status="warning"
            title="Вы не передали ID товара!"

          />
        }
</>
    );
};

