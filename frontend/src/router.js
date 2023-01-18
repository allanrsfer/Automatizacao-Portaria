import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Index } from "./pages/Index/index.js";
import { Create } from "./pages/Create/create.js";
import { Update } from "./pages/Update/update.js";
import { Delete } from "./pages/Delete/delete.js";
import { Show } from "./pages/Show/show.js";


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cadastro" element={<Create />} />
        <Route path="/atualizar" element={<Update />} />
        <Route path="/deletar" element={<Delete />} />
        <Route path="/mostrar" element={<Show />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;