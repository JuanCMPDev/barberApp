'use client'

import React, { useEffect, useState } from 'react';
import Calendar from '../../components/Calendar';
import { useSearchParams } from 'next/navigation';
import { parseISO } from 'date-fns';
import NavbarComponent from '../../components/Navbar';
import Footer from '../../components/Footer';

const Page = () => {
  const searchParams = useSearchParams();
  const dateParam = searchParams.get('date');
  const [date, setDate] = useState({
    justDate: dateParam ? parseISO(decodeURIComponent(dateParam)) : null,
    dateTime: null,
  });

  useEffect(() => {
    setDate({
      justDate: dateParam ? parseISO(decodeURIComponent(dateParam)) : null,
      dateTime: null,
    });
  }, [dateParam]);

  return (
    <div>
      <NavbarComponent/>
      <Calendar initialDate={date} />
      <Footer/>
    </div>
  );
};

export default Page;
