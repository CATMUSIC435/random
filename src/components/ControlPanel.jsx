import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ControlPanel({ maxNumber, setMaxNumber }) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50">
            <div className="relative">
                {!isCollapsed ? <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="cursor-pointer rounded-l-md absolute -left-8 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md p-2 shadow-md hover:scale-105 transition"
                >
                    <ChevronRight size={24} className="text-white" />
                </button> : null}

                <AnimatePresence>
                    {!isCollapsed && (
                        <motion.div
                            key="card"
                            initial={{ x: 200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 200, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 80, damping: 15 }}
                            className="liquid-glass-card rounded-2xl max-w-sm w-full overflow-hidden"
                        >
                            <div className="flex flex-col gap-4 px-6 py-8">
                                <h1 className="text-3xl font-bold text-white text-center">
                                    🎲🎲🎲🎲
                                </h1>
                                <input
                                    type="number"
                                    placeholder="Nhập số bất kỳ (VD: 100)"
                                    value={maxNumber}
                                    onChange={(e) => setMaxNumber(e.target.value)}
                                    className="border text-white border-gray-400 rounded-lg px-4 py-2 w-full text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
