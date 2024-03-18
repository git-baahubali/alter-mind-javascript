
import { Button } from 'react-bootstrap';



//! V2
import React, { useState } from 'react';

export default function Chatbox({ emailThread }) {
    const [inputText, setInputText] = useState(`Hi team ,
    retrigger oppoartnaty 21345
    
    warm regrads
    Balaji 
    Winzone CRM`);
    const [originalText, setOriginalText] = useState(inputText); // Store the original text
    const [tonality, setTonality] = useState([{ tone: '', email: '' }]);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [loading, setLoading] = useState(false);
    const [selectedTone, setSelectedTone] = useState('');


    // Function to handle typing in the textarea
    const handleInputChange = (e) => {
        setInputText(e.target.value);
        // Update the original text only if it's not being restored via undo
        if (!isButtonDisabled) {
            setOriginalText(e.target.value);
        }
    };
    const handleUndoClick = () => {
        setInputText(originalText); // Restore the original text
    };

    // Function to handle clicking the "rewrite with ai" button        
    const handleAIButtonClick = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:4000/api/rewrite-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    emailText: inputText,
                    emailThread: emailThread,
                }),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const emailSuggestions = await response.json();
            console.log(emailSuggestions);
            // console.log(typeof rewrittenEmail);
            const simulatedResponse = [
                { tone: "neutral", email: 'Your neutral email' },
                { tone: "polite", email: 'Your polite email' },
                { tone: "commanding", email: 'Your commanding email' },
            ];
            setTonality(emailSuggestions.emailSuggestions);
            setIsButtonDisabled(false);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleToneButtonClick = (tone) => {
        const selectedEmail = Array.isArray(tonality) ? tonality.find(t => t.tone === tone)?.email || '' : '';
        setInputText(selectedEmail);
        setSelectedTone(tone); // Update the selected tone
    };

    const getButtonClasses = (tone) => `bttn h-10 text-gray-50 rounded-full shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-gray-300 border-2 px-4 ${selectedTone === tone ? 'bg-blue-900' : 'bg-gray-900 hover:bg-gray-900/90'}`;
    return (
        <div className="flex-1 p-4">
            <Button className="bttn h-10 bg-gray-900 text-gray-50 rounded-full shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 border-2 px-4"
                onClick={handleAIButtonClick} size='sm'>
                {loading ? 'Loading...' : '✨ rewrite with ai'}
            </Button>
            <textarea
                className="w-full h-full bg-white rounded-lg shadow-sm p-4"
                placeholder="Type your message here..."
                value={inputText}
                onChange={handleInputChange}
            />
            <div className="flex justify-center gap-2 border-0">
                {['Polite', 'Neutral', 'Commanding'].map((tone) => (
                   <Button  
                   key={tone} 
                   style={{ backgroundColor: selectedTone === tone.toLowerCase() ? '#007bff' : undefined, borderColor: selectedTone === tone.toLowerCase() ? '#007bff' : undefined }}
                   className='bttn'
                   onClick={() => !isButtonDisabled && handleToneButtonClick(tone.toLowerCase())}
                   disabled={isButtonDisabled}>
                   {tone}
                 </Button>
                 
                ))}
                <button
                    className="h-10 bg-gray-900 text-gray-50 rounded-full shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 border-2 px-4"
                    onClick={handleUndoClick}>
                    Undo
                </button>
            </div>
        </div>
    );
}


//! V3

