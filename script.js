     const textarea = document.getElementById('inputText');

        textarea.addEventListener('input', function () {
            updateCounts(this.value);
        });

        function updateCounts(text) {
            // Word count with Unicode support
            const wordCount = text.match(/\p{L}+/gu) ? text.match(/\p{L}+/gu).length : 0;

            // Character count
            const charCount = text.length;

            // Sentence count with Unicode support
            const sentenceCount = text.split(/[\.\?!]/u).filter(Boolean).length;

            // Line count
            const lineCount = text.split('\n').filter(Boolean).length;

            // Paragraph count
            const paragraphCount = text.split('\n\n').filter(Boolean).length;

            document.getElementById('wordCount').textContent = wordCount;
            document.getElementById('charCount').textContent = charCount;
            document.getElementById('sentenceCount').textContent = sentenceCount;
            document.getElementById('lineCount').textContent = lineCount;
            document.getElementById('paragraphCount').textContent = paragraphCount;
        }
