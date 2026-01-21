export interface Idea {
  id: string;
  type: 'vibecode' | 'to-build' | 'integration';
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime?: string;
  fheUseCase: string;
  techStack?: string[];
  productCategory?: string;
  complexity?: string;
}

export interface FeaturedIdea {
  ideaId: string;
  featuredImage?: string;
  ctaText: string;
}

export const ideas: Idea[] = [
  // VibeCoded Ideas (10)
  {
    id: 'vc-001',
    type: 'vibecode',
    title: 'Private NFT Gallery',
    description: 'A decentralized gallery where users can showcase their NFT collections while keeping ownership details completely private. Using Fhenix FHE technology, collectors can prove they own specific NFTs without revealing their wallet addresses or the full extent of their holdings. This creates a unique social layer for NFT enthusiasts who value privacy while still wanting to share their taste and collections with trusted communities.',
    difficulty: 'beginner',
    estimatedTime: 'Weekend project',
    fheUseCase: 'FHE encrypts NFT ownership data on-chain, allowing users to selectively reveal specific pieces to chosen viewers while keeping their full portfolio and wallet address completely hidden from public view.',
    techStack: ['Solidity', 'React', 'fhEVM', 'Ethers.js', 'IPFS']
  },
  {
    id: 'vc-002',
    type: 'vibecode',
    title: 'Secret Santa',
    description: 'A blockchain-powered Secret Santa platform that ensures complete anonymity throughout the gift exchange process. Participants join a pool, and smart contracts powered by Fhenix FHE randomly assign gift recipients while keeping all assignments encrypted. Nobody knows who their Santa is until the big reveal, creating authentic surprise and excitement. Perfect for DAOs, online communities, and remote teams who want to build culture.',
    difficulty: 'beginner',
    estimatedTime: 'Weekend project',
    fheUseCase: 'Encrypted matchmaking ensures participant assignments remain hidden on-chain. FHE allows the smart contract to process the matching logic while keeping all pairs completely confidential until the designated reveal time.',
    techStack: ['Solidity', 'Next.js', 'fhEVM', 'Hardhat', 'Wagmi']
  },
  {
    id: 'vc-003',
    type: 'vibecode',
    title: 'Anonymous Polls',
    description: 'Create tamper-proof polls where votes are completely private and verifiable. Unlike traditional polling systems, this platform uses Fhenix FHE to encrypt votes on-chain, preventing anyone from seeing how individuals voted while still allowing public verification of the final results. Ideal for DAOs, community governance, and sensitive decision-making where voter privacy is paramount but transparency of outcomes is required.',
    difficulty: 'beginner',
    estimatedTime: '1 week',
    fheUseCase: 'Individual votes are encrypted using FHE, allowing smart contracts to tally results without revealing how any specific address voted. Results can be made public while maintaining complete voter confidentiality throughout the process.',
    techStack: ['Solidity', 'React', 'fhEVM', 'Viem', 'TailwindCSS']
  },
  {
    id: 'vc-004',
    type: 'vibecode',
    title: 'Hidden Leaderboard',
    description: 'A competitive gaming leaderboard where player scores remain encrypted until a dramatic reveal moment. Players submit their scores throughout a tournament period, but nobody can see the rankings or scores until the admin triggers the reveal. This creates intense suspense and prevents gaming the system. Perfect for Web3 games, prediction markets, and competitive challenges where premature disclosure could affect outcomes.',
    difficulty: 'intermediate',
    estimatedTime: '1-2 weeks',
    fheUseCase: 'Player scores are encrypted on-chain using FHE, allowing the smart contract to maintain accurate rankings without exposing individual scores. The reveal mechanism uses time-locks or admin triggers to decrypt all scores simultaneously.',
    techStack: ['Solidity', 'TypeScript', 'fhEVM', 'Ethers.js', 'Framer Motion']
  },
  {
    id: 'vc-005',
    type: 'vibecode',
    title: 'Private Tip Jar',
    description: 'Accept donations and tips while keeping contribution amounts completely private. Creators, educators, and public goods projects can receive support without revealing who donated how much, protecting both donor privacy and preventing social pressure. The system proves funds were received without exposing individual contribution sizes. Great for sensitive causes, whistleblower support, or any scenario where donation privacy matters.',
    difficulty: 'beginner',
    estimatedTime: 'Weekend project',
    fheUseCase: 'Donation amounts are encrypted using FHE, so only the total can be publicly verified while individual contributions remain completely private. This protects donors from social pressure and potential targeting.',
    techStack: ['Solidity', 'React', 'fhEVM', 'Wagmi', 'RainbowKit']
  },
  {
    id: 'vc-006',
    type: 'vibecode',
    title: 'Blind Auction',
    description: 'A sealed-bid auction marketplace where all bids remain completely hidden until the auction closes. Participants can bid on items with confidence knowing that no one can see their offers, preventing bid sniping and creating fairer price discovery. When the auction ends, all bids are revealed simultaneously and the highest bidder wins. Ideal for NFT auctions, real estate, and high-value item sales where privacy drives better outcomes.',
    difficulty: 'intermediate',
    estimatedTime: '2 weeks',
    fheUseCase: 'FHE encrypts all bids on-chain, allowing the smart contract to determine the winner without exposing any bid amounts until the auction period ends. This creates a trustless sealed-bid system with verifiable outcomes.',
    techStack: ['Solidity', 'Next.js', 'fhEVM', 'Hardhat', 'shadcn/ui']
  },
  {
    id: 'vc-007',
    type: 'vibecode',
    title: 'Secret Recipe Book',
    description: 'Share your favorite recipes with select friends and family while keeping them private from the broader world. Each recipe is encrypted on-chain and only accessible to addresses you explicitly grant permission to. Perfect for preserving family recipes, sharing secret sauce formulas, or creating exclusive cooking communities. Recipe creators maintain full control over who can access their culinary secrets while ensuring they\'re permanently preserved.',
    difficulty: 'beginner',
    estimatedTime: '1 week',
    fheUseCase: 'Recipes are encrypted using FHE with granular access control. Only addresses with decryption rights can read the recipe contents, while the existence of the recipe and its creator remain verifiable on-chain.',
    techStack: ['Solidity', 'React', 'fhEVM', 'IPFS', 'Ethers.js']
  },
  {
    id: 'vc-008',
    type: 'vibecode',
    title: 'Private Playlist',
    description: 'A music preference platform where users can track their listening habits, create playlists, and receive recommendations without revealing their taste to the public. Using Fhenix FHE, the system can analyze listening patterns and match users with similar tastes while keeping everyone\'s specific preferences completely private. Great for music discovery communities that value privacy and authentic recommendations.',
    difficulty: 'intermediate',
    estimatedTime: '2-3 weeks',
    fheUseCase: 'Music preferences and listening history are encrypted on-chain. FHE allows the smart contract to perform similarity matching and generate recommendations without ever exposing what individuals actually listen to.',
    techStack: ['Solidity', 'TypeScript', 'fhEVM', 'Next.js', 'Viem']
  },
  {
    id: 'vc-009',
    type: 'vibecode',
    title: 'Confidential Reviews',
    description: 'A product review platform where reviewers remain anonymous and review content is encrypted until verified purchase is confirmed. This prevents review bombing, paid fake reviews, and seller retaliation while ensuring only genuine customers can leave feedback. Buyers can read aggregated ratings while detailed reviews remain private until they make a purchase, creating honest and trustworthy product feedback.',
    difficulty: 'intermediate',
    estimatedTime: '2 weeks',
    fheUseCase: 'Review content is encrypted using FHE and only decryptable by verified purchasers. The system can aggregate star ratings publicly while keeping detailed feedback private, preventing manipulation and ensuring authentic reviews.',
    techStack: ['Solidity', 'React', 'fhEVM', 'Hardhat', 'TailwindCSS']
  },
  {
    id: 'vc-010',
    type: 'vibecode',
    title: 'Hidden Wishlist',
    description: 'Create encrypted wishlists for birthdays, weddings, and special occasions where gift-givers can see what you want without revealing who purchased what. When someone buys an item, it\'s marked as purchased privately, preventing duplicate gifts while maintaining surprise. Perfect for registries and wish lists where coordination is needed but you don\'t want to know who gave you what until the big day.',
    difficulty: 'beginner',
    estimatedTime: '1 week',
    fheUseCase: 'Wishlist items and purchase status are encrypted on-chain. Gift-givers can claim items privately, and the system prevents duplicates while keeping the gift-giver\'s identity hidden from the recipient until reveal.',
    techStack: ['Solidity', 'Next.js', 'fhEVM', 'Wagmi', 'shadcn/ui']
  },

  // To Build Ideas (10)
  {
    id: 'tb-001',
    type: 'to-build',
    title: 'Private Dating App',
    description: 'A revolutionary dating platform where user profiles remain completely encrypted until a mutual match occurs. Unlike traditional apps where swiping reveals your interest, this system uses Fhenix FHE to process compatibility matching without exposing who liked whom. Only when two users mutually select each other do their profiles and interest become visible. This protects users from rejection visibility, stalking, and unwanted attention while creating authentic connections.',
    difficulty: 'advanced',
    estimatedTime: '3-4 weeks',
    fheUseCase: 'User profiles and swipe decisions are encrypted using FHE. The smart contract processes mutual matching logic without revealing non-mutual likes, protecting user privacy and creating a safer, less judgmental dating environment.',
    techStack: ['Solidity', 'React Native', 'fhEVM', 'Hardhat', 'IPFS', 'Push Protocol']
  },
  {
    id: 'tb-002',
    type: 'to-build',
    title: 'Secret Poker Night',
    description: 'A fully on-chain poker game where player hands remain completely hidden throughout the game. Using Fhenix FHE, cards are dealt encrypted, and the smart contract evaluates hands and determines winners without anyone being able to see other players\' cards. This creates provably fair poker with the privacy of physical cards but the trustlessness of blockchain. Perfect for Web3 gaming communities and decentralized casinos.',
    difficulty: 'advanced',
    estimatedTime: '4-6 weeks',
    fheUseCase: 'Card hands are encrypted using FHE, allowing the smart contract to evaluate poker hands and determine winners without revealing any player\'s cards until the showdown. This creates trustless, provably fair card games.',
    techStack: ['Solidity', 'TypeScript', 'fhEVM', 'Next.js', 'WebSocket', 'Hardhat']
  },
  {
    id: 'tb-003',
    type: 'to-build',
    title: 'Anonymous Whistleblower',
    description: 'A secure platform for whistleblowers to submit evidence and reports while maintaining complete anonymity. Reports are encrypted on-chain and only accessible to verified journalists or investigators with proper credentials. The system protects source identity while ensuring submitted evidence remains tamper-proof and verifiable. Critical for investigative journalism, corporate accountability, and government transparency in an era of digital surveillance.',
    difficulty: 'advanced',
    estimatedTime: '3-4 weeks',
    fheUseCase: 'Whistleblower submissions are encrypted using FHE with access control. Only authorized parties can decrypt reports, and the whistleblower\'s identity is completely protected while submission authenticity remains verifiable.',
    techStack: ['Solidity', 'React', 'fhEVM', 'IPFS', 'Lit Protocol', 'Hardhat']
  },
  {
    id: 'tb-004',
    type: 'to-build',
    title: 'Private Health Records',
    description: 'A patient-controlled health record system where medical data is encrypted on-chain and only accessible to healthcare providers with explicit patient permission. Patients can grant temporary access to specific doctors or hospitals and revoke it at any time. The system creates an interoperable health record that follows patients across providers while maintaining strict privacy. Essential for medical data sovereignty and better healthcare coordination.',
    difficulty: 'advanced',
    estimatedTime: '4-6 weeks',
    fheUseCase: 'Medical records are encrypted using FHE with granular access control. Patients grant decryption rights to specific healthcare providers, and the system can perform analytics on encrypted data without exposing sensitive information.',
    techStack: ['Solidity', 'TypeScript', 'fhEVM', 'Next.js', 'IPFS', 'Ceramic']
  },
  {
    id: 'tb-005',
    type: 'to-build',
    title: 'Confidential Surveys',
    description: 'Enterprise-grade survey platform where respondent answers remain completely private while allowing statistical analysis of results. Organizations can conduct sensitive employee surveys, market research, and feedback collection with guaranteed anonymity. Unlike traditional surveys where admins can see individual responses, FHE ensures that only aggregated statistics are accessible. Perfect for HR departments, researchers, and organizations that need honest feedback.',
    difficulty: 'intermediate',
    estimatedTime: '2-3 weeks',
    fheUseCase: 'Survey responses are encrypted using FHE, allowing the system to compute statistical aggregates and insights without revealing any individual\'s specific answers. This encourages honest responses on sensitive topics.',
    techStack: ['Solidity', 'React', 'fhEVM', 'Hardhat', 'Chart.js', 'TailwindCSS']
  },
  {
    id: 'tb-006',
    type: 'to-build',
    title: 'Secret Ballot Voting',
    description: 'A DAO governance system where votes are completely private but results are publicly verifiable. Token holders can vote on proposals without revealing their voting choice to other members or the public. This prevents vote buying, coercion, and groupthink while maintaining the transparency needed for trustless governance. The system proves the vote count is correct without exposing how anyone voted.',
    difficulty: 'intermediate',
    estimatedTime: '2-3 weeks',
    fheUseCase: 'Votes are encrypted using FHE, allowing the smart contract to tally results and determine outcomes without revealing individual voting decisions. This creates truly private yet verifiable democratic governance.',
    techStack: ['Solidity', 'Next.js', 'fhEVM', 'Wagmi', 'Viem', 'Hardhat']
  },
  {
    id: 'tb-007',
    type: 'to-build',
    title: 'Private Prediction Market',
    description: 'A prediction market where all bets remain hidden until the event outcome is determined. Traders can speculate on real-world events without revealing their positions, preventing market manipulation and information leakage. When the event concludes, all positions are revealed simultaneously and settled fairly. This creates more efficient price discovery and prevents large players from moving markets through position disclosure.',
    difficulty: 'advanced',
    estimatedTime: '3-4 weeks',
    fheUseCase: 'All market positions are encrypted using FHE, allowing the contract to match trades and calculate payouts without exposing individual positions. This prevents front-running and creates fairer prediction markets.',
    techStack: ['Solidity', 'TypeScript', 'fhEVM', 'Next.js', 'Hardhat', 'Chainlink']
  },
  {
    id: 'tb-008',
    type: 'to-build',
    title: 'Hidden Salary Tracker',
    description: 'An anonymous compensation comparison tool where employees can submit their salaries and see how they compare to peers without revealing their specific earnings. Using FHE, the system calculates percentile rankings and industry averages while keeping all individual salaries completely private. This empowers workers with market data for negotiations while protecting privacy and preventing workplace tension.',
    difficulty: 'intermediate',
    estimatedTime: '2 weeks',
    fheUseCase: 'Salary data is encrypted using FHE, allowing the system to compute statistics like averages, medians, and percentiles without exposing any individual\'s specific compensation. Users see where they rank without revealing their number.',
    techStack: ['Solidity', 'React', 'fhEVM', 'Hardhat', 'TailwindCSS']
  },
  {
    id: 'tb-009',
    type: 'to-build',
    title: 'Confidential KYC',
    description: 'A privacy-preserving identity verification system where users prove compliance without revealing personal information. Users submit KYC documents once, and the system generates zero-knowledge proofs of compliance that can be reused across platforms. Services can verify users meet requirements (age, geography, accreditation) without seeing names, addresses, or documents. Essential for DeFi compliance without sacrificing user privacy.',
    difficulty: 'advanced',
    estimatedTime: '4-5 weeks',
    fheUseCase: 'Identity documents are encrypted using FHE, and the system generates compliance proofs without exposing underlying data. Services verify credentials without accessing raw personal information, creating privacy-preserving KYC.',
    techStack: ['Solidity', 'TypeScript', 'fhEVM', 'Next.js', 'Hardhat', 'Polygon ID']
  },
  {
    id: 'tb-010',
    type: 'to-build',
    title: 'Encrypted Chat Roulette',
    description: 'A random anonymous chat platform where users are paired for conversations without revealing any identity information. Unlike traditional chat roulette, both connection history and conversation content are encrypted on-chain, creating verifiable anonymity. Users can prove they never chatted before without revealing past partners. Perfect for anonymous support groups, random networking, and privacy-focused social experiments.',
    difficulty: 'intermediate',
    estimatedTime: '2-3 weeks',
    fheUseCase: 'User pairing and chat history are encrypted using FHE, allowing the system to prevent repeat pairings without revealing who chatted with whom. Conversation privacy is guaranteed while the matching algorithm works effectively.',
    techStack: ['Solidity', 'React', 'fhEVM', 'WebSocket', 'XMTP', 'Hardhat']
  },

  // Integration Ideas (10)
  {
    id: 'int-001',
    type: 'integration',
    title: 'Add Private Orders to DEXs',
    description: 'Integrate Fhenix FHE into existing decentralized exchanges to hide trading intentions and prevent MEV exploitation. Traders can place limit orders with encrypted amounts and prices, preventing front-running and sandwich attacks. The order book remains private while the matching engine operates trustlessly. When orders execute, only the counterparties see the trade details. This brings dark pool privacy to DeFi while maintaining decentralization.',
    difficulty: 'advanced',
    estimatedTime: '3-4 weeks',
    fheUseCase: 'Order details (size, price, direction) are encrypted using FHE, preventing MEV bots from exploiting trading intentions. The DEX can match orders without exposing them to the mempool, creating fairer and more efficient trading.',
    techStack: ['Solidity', 'fhEVM', 'Hardhat', 'Uniswap V3', 'Ethers.js'],
    productCategory: 'DEX',
    complexity: 'Complex'
  },
  {
    id: 'int-002',
    type: 'integration',
    title: 'Add Hidden Attributes to NFTs',
    description: 'Enhance NFT collections with encrypted attributes that are revealed at specific times or under certain conditions. Imagine collectible card games where card stats are hidden until played, or mystery box NFTs where rarity is concealed until opening. This adds excitement and fairness to NFT drops and gaming. Attributes are verifiably on-chain but remain private until the designated reveal mechanism triggers.',
    difficulty: 'intermediate',
    estimatedTime: '2-3 weeks',
    fheUseCase: 'NFT metadata and attributes are encrypted using FHE, allowing smart contracts to verify properties and trigger game logic without revealing hidden attributes. Reveal mechanisms use time-locks or conditional decryption.',
    techStack: ['Solidity', 'fhEVM', 'OpenZeppelin', 'Hardhat', 'IPFS'],
    productCategory: 'NFT Marketplace',
    complexity: 'Moderate'
  },
  {
    id: 'int-003',
    type: 'integration',
    title: 'Add Secret Votes to DAOs',
    description: 'Upgrade existing DAO governance systems with private voting capabilities. Token holders can vote on proposals without revealing their choices, preventing vote buying, whale intimidation, and groupthink. The integration maintains existing voting mechanisms while adding an FHE layer for ballot privacy. Results remain publicly verifiable and the system proves correct tallying without exposing individual votes.',
    difficulty: 'intermediate',
    estimatedTime: '2-3 weeks',
    fheUseCase: 'Votes are encrypted using FHE, allowing the governance contract to count votes and determine outcomes without revealing how individual addresses voted. This creates truly private yet trustless democratic governance.',
    techStack: ['Solidity', 'fhEVM', 'Governor Bravo', 'Hardhat', 'OpenZeppelin'],
    productCategory: 'DAO Tool',
    complexity: 'Moderate'
  },
  {
    id: 'int-004',
    type: 'integration',
    title: 'Add Encrypted Bids to Auctions',
    description: 'Transform existing NFT auction platforms into sealed-bid systems using Fhenix FHE. Bidders can participate with complete privacy, preventing sniping and creating fairer price discovery. When auctions close, all bids are revealed simultaneously and winners determined trustlessly. This integration works with platforms like OpenSea, Foundation, or custom auction houses, bringing traditional sealed-bid mechanics to Web3.',
    difficulty: 'intermediate',
    estimatedTime: '2 weeks',
    fheUseCase: 'Auction bids are encrypted using FHE, preventing bid sniping and creating sealed-bid mechanics. The smart contract determines winners without exposing any bids until the auction ends, creating fairer outcomes.',
    techStack: ['Solidity', 'fhEVM', 'Hardhat', 'Ethers.js', 'OpenZeppelin'],
    productCategory: 'NFT Marketplace',
    complexity: 'Moderate'
  },
  {
    id: 'int-005',
    type: 'integration',
    title: 'Add Private Scores to Games',
    description: 'Enhance Web3 games with hidden competitive rankings and encrypted player statistics. Scores remain private until tournament ends, preventing gaming the system and creating dramatic reveals. Players compete without knowing where they stand, and the leaderboard unveils all at once. Perfect for competitive games, esports tournaments, and any scenario where premature score disclosure affects gameplay strategy.',
    difficulty: 'intermediate',
    estimatedTime: '2-3 weeks',
    fheUseCase: 'Player scores and rankings are encrypted using FHE, allowing the game contract to maintain accurate leaderboards without exposing individual performance. Reveal mechanisms unlock scores at tournament conclusion.',
    techStack: ['Solidity', 'fhEVM', 'Unity', 'Hardhat', 'Nakama'],
    productCategory: 'Gaming',
    complexity: 'Moderate'
  },
  {
    id: 'int-006',
    type: 'integration',
    title: 'Add Confidential Trades to P2P',
    description: 'Add privacy layers to peer-to-peer trading platforms and OTC desks. Traders can negotiate deals with encrypted offers, protecting their intentions and positions from market observation. Trade sizes and prices remain hidden until deals close, preventing information leakage that could move markets. This is essential for institutional traders and high-net-worth individuals who need privacy for large transactions.',
    difficulty: 'advanced',
    estimatedTime: '3-4 weeks',
    fheUseCase: 'Trade offers and negotiations are encrypted using FHE, allowing counterparties to negotiate without revealing terms to the broader market. This prevents market impact and protects trading strategies.',
    techStack: ['Solidity', 'fhEVM', 'Hardhat', 'Next.js', 'WebSocket'],
    productCategory: 'OTC Platform',
    complexity: 'Complex'
  },
  {
    id: 'int-007',
    type: 'integration',
    title: 'Add Hidden Reviews to E-commerce',
    description: 'Integrate encrypted review systems into blockchain-based marketplaces. Reviewers remain anonymous, and review content is only accessible to verified purchasers, preventing fake reviews and seller retaliation. The system shows aggregated ratings publicly while keeping detailed feedback private until purchase. This creates honest, trustworthy product reviews that benefit genuine buyers.',
    difficulty: 'beginner',
    estimatedTime: '1-2 weeks',
    fheUseCase: 'Review content is encrypted using FHE and only decryptable by verified purchasers. The system aggregates star ratings publicly while protecting detailed feedback and reviewer identity.',
    techStack: ['Solidity', 'fhEVM', 'Hardhat', 'React', 'IPFS'],
    productCategory: 'E-commerce',
    complexity: 'Simple'
  },
  {
    id: 'int-008',
    type: 'integration',
    title: 'Add Secret Offers to Job Boards',
    description: 'Enhance Web3 job platforms with private salary negotiations. Employers post roles with encrypted compensation ranges, and candidates submit encrypted salary expectations. The system matches parties only when ranges overlap, preventing wasted time and awkward negotiations. Neither party sees the other\'s numbers unless there\'s potential fit, creating efficient and respectful hiring processes.',
    difficulty: 'intermediate',
    estimatedTime: '2 weeks',
    fheUseCase: 'Salary ranges and expectations are encrypted using FHE, allowing the platform to match candidates and employers based on compensation compatibility without revealing specific numbers unless both parties agree.',
    techStack: ['Solidity', 'fhEVM', 'Next.js', 'Hardhat', 'Lens Protocol'],
    productCategory: 'Job Board',
    complexity: 'Moderate'
  },
  {
    id: 'int-009',
    type: 'integration',
    title: 'Add Private Balances to Wallets',
    description: 'Create wallet extensions that hide token balances and transaction amounts from public view. Users can transact normally while keeping their portfolio completely private. The wallet proves sufficient balance for transactions without revealing the actual amount held. This is critical for privacy-conscious users, businesses, and anyone who wants financial privacy without sacrificing Web3 transparency.',
    difficulty: 'advanced',
    estimatedTime: '4-5 weeks',
    fheUseCase: 'Token balances are encrypted using FHE, allowing the wallet to prove sufficient funds for transactions without revealing total holdings. This creates private yet verifiable financial activity on public blockchains.',
    techStack: ['Solidity', 'TypeScript', 'fhEVM', 'Ethers.js', 'MetaMask SDK'],
    productCategory: 'Wallet',
    complexity: 'Complex'
  },
  {
    id: 'int-010',
    type: 'integration',
    title: 'Add Encrypted Messages to Social Apps',
    description: 'Integrate end-to-end encrypted messaging into decentralized social platforms like Lens, Farcaster, or custom Web3 social apps. Users can send private DMs that are encrypted on-chain, ensuring that even the platform cannot read message contents. This brings Signal-level privacy to Web3 social, creating truly censorship-resistant and private communication.',
    difficulty: 'intermediate',
    estimatedTime: '2-3 weeks',
    fheUseCase: 'Messages are encrypted using FHE with recipient-specific decryption keys. Only the intended recipient can read message contents, while message existence and delivery remain verifiable on-chain.',
    techStack: ['Solidity', 'fhEVM', 'React', 'XMTP', 'Lens Protocol'],
    productCategory: 'Social App',
    complexity: 'Moderate'
  },
];

export const featuredIdea: FeaturedIdea = {
  ideaId: 'tb-002',
  ctaText: 'Start Building with Fhenix'
};
