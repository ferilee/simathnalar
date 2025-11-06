import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Gamepad2, BarChart3, Users, LogIn } from 'lucide-react';
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

export default function SiMathNalar() {
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    setUser({ name: 'Guru SMK', role: 'Guru' });
  };

  const data = [
    { name: 'Eksponen', nilai: 80 },
    { name: 'Fungsi Kuadrat', nilai: 75 },
    { name: 'Barisan & Deret', nilai: 88 },
    { name: 'Trigonometri', nilai: 70 },
    { name: 'Statistika', nilai: 90 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden">
      <motion.div
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full -top-20 -left-10 animate-pulse" />
        <div className="absolute w-96 h-96 bg-blue-500/10 blur-3xl rounded-full bottom-0 right-0 animate-pulse delay-700" />
      </motion.div>

      <header className="py-6 px-8 flex justify-between items-center border-b border-slate-700 relative z-10">
        <h1 className="text-2xl font-bold text-cyan-400">Si MathNalar</h1>
        <nav className="space-x-6 text-slate-300">
          <a href="#fitur" className="hover:text-cyan-400 transition">Fitur</a>
          <a href="#guru" className="hover:text-cyan-400 transition">Dashboard Guru</a>
          <a href="#tentang" className="hover:text-cyan-400 transition">Tentang</a>
          {!user ? (
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold" onClick={() => setShowLogin(true)}>
              Masuk
            </Button>
          ) : (
            <p className="text-cyan-300 font-semibold">Halo, {user.name}</p>
          )}
        </nav>
      </header>

      {!showLogin ? (
        <>
          <section className="text-center py-20 px-8 max-w-3xl mx-auto relative z-10">
            <motion.h2 
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 40 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
            >
              Revolusioner Pembelajaran Matematika untuk Siswa SMK
            </motion.h2>
            <motion.p className="text-slate-300 mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              Dirancang oleh guru matematika SMK yang memahami tantangan pembelajaran kejuruan. 
              Materi memperkuat kompetensi teknis dan nalar kritis di era industri 4.0.
            </motion.p>
            <motion.div className="flex justify-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
              <Button className="bg-cyan-500 hover:bg-cyan-600">Mulai Eksplor</Button>
              <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white">
                Tentukan Kelas
              </Button>
            </motion.div>
          </section>

          <section id="fitur" className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 py-16 max-w-6xl mx-auto relative z-10">
            {[
              { icon: BookOpen, title: 'Materi Kontekstual', desc: 'Materi matematika relevan dengan dunia kerja dan kompetensi kejuruan.' },
              { icon: Gamepad2, title: 'Gamifikasi Seru', desc: 'Belajar matematika jadi menyenangkan dengan sistem poin, level, dan misi.' },
              { icon: BarChart3, title: 'Analitik Belajar', desc: 'Pantau kemampuan dan nalar matematis siswa.' }
            ].map((item, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.05 }}>
                <Card className="bg-slate-800 border-slate-700 hover:border-cyan-400 transition">
                  <CardContent className="p-6 text-center">
                    <item.icon className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </section>

          <section id="guru" className="bg-slate-900 py-20 px-8 text-center relative z-10">
            <h3 className="text-3xl font-bold mb-6 text-cyan-400">Dashboard Guru Dinamis</h3>
            <p className="text-slate-400 mb-10 max-w-3xl mx-auto">
              Pantau progress kelas, analisis kemampuan per topik, dan nilai nalar matematis dengan tampilan real-time dan interaktif.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center max-w-5xl mx-auto mb-12">
              {[
                { icon: Users, title: 'Monitoring Kelas', data: '32 Siswa Aktif', progress: 85 },
                { icon: BarChart3, title: 'Analisis Topik', data: 'Topik Terkuat: Eksponen', progress: 78 },
                { icon: BookOpen, title: 'Evaluasi Nalar', data: 'Rata-rata Nalar: 82%', progress: 82 }
              ].map((item, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.3 }}>
                  <Card className="bg-slate-800 border-slate-700 hover:border-cyan-400 transition w-full">
                    <CardContent className="p-6 text-center">
                      <item.icon className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-slate-400 text-sm mb-3">{item.data}</p>
                      <Progress value={item.progress} className="h-2 bg-slate-700" />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 max-w-4xl mx-auto">
              <h4 className="text-xl font-semibold mb-4 text-cyan-300">Grafik Analitik Siswa (Real-Time)</h4>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="name" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', color: '#e2e8f0' }} />
                  <Line type="monotone" dataKey="nilai" stroke="#22d3ee" strokeWidth={3} dot={{ fill: '#22d3ee' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </section>

          <footer className="text-center py-10 border-t border-slate-700 text-slate-400 relative z-10">
            <p className="max-w-xl mx-auto italic">
              “Matematika Bukan untuk Dihafal, Tapi untuk Dimengerti. Nalar Bukan Bawaan, Tapi Diasah. Bersama Si MathNalar, 
              Jadilah SMK yang Berpikir Kritis dan Siap Kerja!”
            </p>
          </footer>
        </>
      ) : (
        <motion.div className="flex flex-col justify-center items-center h-[80vh] text-center px-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Card className="bg-slate-800 border-slate-700 p-8 w-full max-w-md">
            <CardContent>
              <LogIn className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4 text-cyan-300">Login Guru</h2>
              <form onSubmit={handleLogin} className="space-y-4">
                <Input type="text" placeholder="Nama Pengguna" className="bg-slate-700 border-slate-600 text-white" required />
                <Input type="password" placeholder="Kata Sandi" className="bg-slate-700 border-slate-600 text-white" required />
                <Button className="w-full bg-cyan-500 hover:bg-cyan-600">Masuk</Button>
              </form>
              <Button variant="ghost" className="text-slate-400 mt-4" onClick={() => setShowLogin(false)}>
                Kembali ke Beranda
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
}
