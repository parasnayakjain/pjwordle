import React, { useState } from 'react';
import Letter from './Letter';
export const Board = () => {
  return (
    <div className="board">
        <div className="row">
            <Letter letterPos={0} letterVal={0}></Letter>
            <Letter letterPos={1} letterVal={0}></Letter>
            <Letter letterPos={2} letterVal={0}></Letter>
            <Letter letterPos={3} letterVal={0}></Letter>
            <Letter letterPos={4} letterVal={0}></Letter>
        </div>
        <div className="row">
        <Letter letterPos={0} letterVal={1}></Letter>
            <Letter letterPos={1} letterVal={1}></Letter>
            <Letter letterPos={2} letterVal={1}></Letter>
            <Letter letterPos={3} letterVal={1}></Letter>
            <Letter letterPos={4} letterVal={1}></Letter>
        </div>
        <div className="row">
        <Letter letterPos={0} letterVal={2}></Letter>
            <Letter letterPos={1} letterVal={2}></Letter>
            <Letter letterPos={2} letterVal={2}></Letter>
            <Letter letterPos={3} letterVal={2}></Letter>
            <Letter letterPos={4} letterVal={2}></Letter>
        </div>
        <div className="row">
        <Letter letterPos={0} letterVal={3}></Letter>
            <Letter letterPos={1} letterVal={3}></Letter>
            <Letter letterPos={2} letterVal={3}></Letter>
            <Letter letterPos={3} letterVal={3}></Letter>
            <Letter letterPos={4} letterVal={3}></Letter>
        </div>
        <div className="row">
        <Letter letterPos={0} letterVal={4}></Letter>
            <Letter letterPos={1} letterVal={4}></Letter>
            <Letter letterPos={2} letterVal={4}></Letter>
            <Letter letterPos={3} letterVal={4}></Letter>
            <Letter letterPos={4} letterVal={4}></Letter>
        </div>
        <div className="row">
        <Letter letterPos={0} letterVal={5}></Letter>
            <Letter letterPos={1} letterVal={5}></Letter>
            <Letter letterPos={2} letterVal={5}></Letter>
            <Letter letterPos={3} letterVal={5}></Letter>
            <Letter letterPos={4} letterVal={5}></Letter>
        </div>
    </div>
  )
}
