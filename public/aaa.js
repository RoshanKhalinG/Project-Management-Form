import { Snackbar } from '@mui/material';
import Confetti from 'react-confetti';
import { Toaster, toast } from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSpinner } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const form = useRef();
  const [open, setOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [loading, setLoading] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectSize = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);
    return () => window.removeEventListener('resize', detectSize);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm('service_k0f3ehe', 'template_qyzz055', form.current, '4x6P3x_s6clgctgut')
      .then(() => {
          setOpen(true);
          setShowConfetti(true);
          setLoading(false);
          form.current.reset();
          toast.success("Email sent successfully!");
          setTimeout(() => setShowConfetti(false), 5000);
        },
        (error) => {
          console.error(error.text);
          setLoading(false);
          toast.error("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div id="contact" className="flex flex-col justify-center items-center relative z-10 px-4">
      <Toaster position="bottom-right" reverseOrder={false} />
      {showConfetti && (
        <Confetti width={windowDimension.width} height={windowDimension.height} recycle={false} />
      )}
      <div className="flex flex-col justify-center items-center w-full max-w-4xl gap-4 py-12">
        <h2 className="text-4xl font-semibold text-center text-gray-900 dark:text-white">Contact</h2>
        <p className="text-lg text-center text-gray-600 dark:text-gray-300 max-w-md">
          Got a question or an opportunity? I'm just a message away!!
        </p>

        <form ref={form} onSubmit={handleSubmit} className="w-full max-w-lg bg-white dark:bg-gray-800 shadow-lg p-8 rounded-lg flex flex-col gap-4">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Get In Touch 🚀</h3>
          <input 
            type="email" 
            name="from_email" 
            placeholder="Your Email" 
            required 
            className="w-full p-3 rounded-lg border dark:border-gray-700 bg-transparent dark:text-white focus:ring focus:ring-indigo-400"
          />
          <input 
            type="text" 
            name="from_name" 
            placeholder="Your Name" 
            required 
            className="w-full p-3 rounded-lg border dark:border-gray-700 bg-transparent dark:text-white focus:ring focus:ring-indigo-400"
          />
          <input 
            type="text" 
            name="subject" 
            placeholder="Subject" 
            required 
            className="w-full p-3 rounded-lg border dark:border-gray-700 bg-transparent dark:text-white focus:ring focus:ring-indigo-400"
          />
          <textarea 
            name="message" 
            placeholder="Message" 
            rows="4" 
            required 
            className="w-full p-3 rounded-lg border dark:border-gray-700 bg-transparent dark:text-white focus:ring focus:ring-indigo-400"
          />
          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition-transform disabled:opacity-50">
            {loading ? (
              <FontAwesomeIcon icon={faSpinner} spin />
            ) : (
              <span>Send Message <FontAwesomeIcon icon={faPaperPlane} /></span>
            )}
          </button>
        </form>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
        />
      </div>
    </div>
  );
};

export default Contact;
