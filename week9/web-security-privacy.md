# Web Security and Privacy

## Security
- potential security oversights
    - no user authentication 
    - allowing weak authentication
    - not sanitizing form entires & requests
    - not encrypting sensitive communications
    - session that don't time out
    - out-of-date (un-patched) software
        - new vulnerabilities discovered all the time
    - bugs that expose user data
- cross spite scripting
    - the attacker inserts arbitrary HTML on our web page
        - how can this ever happen?
    - what can go wrong
        - change content of the page
        - steal user's info
- what if HTML includes script tags?
    - replace the page with a new one
    - pass info from the page to foreign page
    - download user's cookies (passwords) for other sites
- mitigation
    - don't allow any HTML to be inserted
        - ackend libraries to strip out HTML tags
    - don't allow malicious HTML to be inserted
        - backend libraries o sanitize HTML 
    - similar techniques may be used to protect agaisnt SQL injectiom
- distributed denial of service
    - DDoS
    - overwhlem a server with malicious requests to block regular users
    - requests don't come from one machine 
        - these are easily blocked
    - attacker uses a number of controlled machines, often compromised
        - hard to spot
- DDoS mitigation
    - rate limiting
        - limit volume of rewuests from a user
    - throw out excess traffic at random
        - some will be malicious, some will be legitimate
    - distribute traffic across network
        - by distributing load, can accommodate huge volume
- network security
    - need to send requests: GET/POST
    - need to send responses: HTML documents
    - network channels aren't necessarily secure
    - confidentiality - What if someone intercepts
    and reads this message?
    - integrity - What if someone intercepts and
    alters this message?
- secure communication
    - For anyone other than the intended recipient,
    we want our message to be
        - unreadable
        - impossible to change without detection
    - Encryption function
        - F(X) = Y easy to compute
        - F-1(Y) = X difficult to compute (without additional knowledge)
- encryption
    - Ensures privacy within an organization and on the
    Internet
    - The conversion of data into an unreadable form,
    called ciphertext 
- decryption
    - The process of converting the ciphertext back into its
    original form, called plaintext or cleartext, so it can be understood
    - The encryption/decryption process requires an
    algorithm and a key
- browser-server communication
    - can use encrypted communication in a web app
        - HTTP represents an encrypted (secure) connection
    - HTTPS is secure HTTP 
        - data passed back and forth
        - browser and server agree on a key
        - encryption is then done basked on this key
        - this is handled by he secure sockets layer (SSL)
- HTTPS connections
    - Browser makes a connection to the server
    - SSL handshake protocol
        - Browser sends and requests a certificate
            - Certificates are effectively keys that can be verified as authentic
            - This is one way public key systems are used
       - Server replies with a certificate of its own
    - SSL change cipher protocol
        - Browser and server use their certificates to agree on a key
        - Again using a variant of public key systems
    - Communication is done securely using that key
    (symmetric key encryption)
        - Key is only used for this particular session
- Secure Socket Layer (SSL)
    - a protocol that allows data to be privateley exchanged over the public networks
    - developed by Netscape
    - encrypts data sent between a client and a web server
    - utilizes both symmetric and asymmetric keys
    - "https" is http over SLL
    - browsers display a lock icon
    - SSL provides secure communication between
    a client and server by using:
        - Server and client digital certificates for
        authentication
        - Symmetric-key cryptography using a "session key"
        for bulk encryption
        - Public-key cryptography for transfer of the session key
- certificate authority 
    - a trusted third-party organization or company that issued digital certificates


## Privacy
- cookies
    - A cookie is a name/value pair created by a website
    to store information on your computer
- Data Collection: Cookies
    - Why would a user want cookies?
        - User authentication (remember me)
        - Site preferences
        - Contents of shopping carts
    - Why would a developer use cookies?
        - Better user experience
        - Ad tracking
        - Site metrics
- Data Collection: Behavior Logging
    - Any action a user takes on a webpage can be logged
    - HTML event listeners!
        - Clicks
        - Hovers
    - Time between actions
        - How long you spend looking at a post
        - Did you skip an ad? At what point in the ad?
- Data Applications: Search
    - Improve results
        - Did the user click a link?
            -  Was it the top result?
        - Did the user need to write another query?
    - Predictive suggestions
    - PageRank
    - Natural language processing
- Data Applications: Drive a metric
    - Optimize a webpage’s behavior for something that can be quantitatively measured
        - Iterative UI improvements
            - Email client: decrease time to reply to emails
            - Increase engagement with a feature that generates more user data
            - Increase behavior that fits more profitable business model
    -  A/B testing
- privacy policy
    - Statement saying what the web site does with
    any information it collects
        - Or otherwise obtains from the user
        - And why the web site needs this information
    - Generally considered legally binding
        - Must obey the laws of the land
        - Different lands have different laws
    - Written in dense legal language
    - Users may or may not pay attention 


