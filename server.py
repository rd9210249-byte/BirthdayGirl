"""
Local development server for the Multilingual Love Heart website.
Run this script to view the website in your browser:
    python server.py
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def run():
    # Allow port reuse
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        url = f"http://localhost:{PORT}"
        print(f"\n=======================================================")
        print(f"  ❤️ Multilingual Love Heart Web App is Running! ❤️")
        print(f"  Local URL: {url}")
        print(f"  Serving files from: {DIRECTORY}")
        print(f"  Press Ctrl+C to stop the server.")
        print(f"=======================================================\n")
        
        # Open in default browser automatically
        webbrowser.open(url)
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server. Goodbye! ❤️")
            httpd.shutdown()

if __name__ == "__main__":
    run()
