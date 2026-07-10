import { Head, usePage } from '@inertiajs/react';
import Navbar from '@/components/header/navbar';

export default function Welcome() {
  const { auth } = usePage().props;

  return (
    <>
      <Head title="Welcome" />
      <Navbar />
      <h1>Welcome to Alerta Unida</h1>
      <h2>Welcome to Alerta Unida</h2>
      <h3>Welcome to Alerta Unida</h3>
      <h4>Welcome to Alerta Unida</h4>
      <p>
        This is a simple application built with Laravel, Inertia.js, and React.
        I hate AI.
      </p>
    </>
  );
}
