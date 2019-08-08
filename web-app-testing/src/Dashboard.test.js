import React from 'react';
import { render, cleanup, fireEvent } from "@testing-library/react";
import Dashboard from './Dashboard'

describe("<Dashboard />", () =>  {
    it('renders without crashing', () => {
        render(<Dashboard />)
    })
})