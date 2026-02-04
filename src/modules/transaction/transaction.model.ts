import mongoose, { Document, model, Schema } from 'mongoose';

export enum TransactionType {
  SENT = 'sent',
  RECEIVED = 'received',
  SWAP = 'swap',
}

export enum TransactionStatus {
  SUCCESSFUL = 'successful',
  FAILED = 'failed',
  PENDING = 'pending',
}

export enum TransactionCoin {
  BITCOIN = 'bitcoin',
  ETHEREUM = 'ethereum',
  BINANCE_COIN = 'binance coin',
  TRON = 'tron',
  USDT_TRC = 'usdt trc20',
  USDT_ERC = 'usdt erc20',
  SOLANA = 'solana',
  LITE_COIN = 'litecoin',
  DOGE = 'dogecoin',
  DASH = 'dash',
  BITCOIN_CASH = 'bitcoin cash',
  DOT = 'polkadot',
  POLYGON = 'polygon',
  XLM = 'stellar',
}

export type TransactionDocument = Document & {
  user: mongoose.Types.ObjectId;
  receiver?: mongoose.Types.ObjectId | null;

  transactionType: TransactionType;

  coin: TransactionCoin;
  amount: number;

  fromCoin?: TransactionCoin;
  toCoin?: TransactionCoin;
  fromAmount?: number;
  toAmount?: number;

  network?: string | null;
  walletAddress?: string;
  transactionHash?: string;

  status: TransactionStatus;
  createdAt: Date;
  updatedAt: Date;
};

const transactionSchema = new Schema<TransactionDocument>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    receiver: { type: Schema.Types.ObjectId, ref: 'User', default: null },

    transactionType: {
      type: String,
      enum: Object.values(TransactionType),
      required: true,
    },

    coin: {
      type: String,
      enum: Object.values(TransactionCoin),
      required: true
    },
    amount: { type: Number, required: true },

    fromCoin: {
      type: String,
      enum: Object.values(TransactionCoin),
    },
    toCoin: {
      type: String,
      enum: Object.values(TransactionCoin),
    },
    fromAmount: { type: Number },
    toAmount: { type: Number },

    network: { type: String, default: null },
    walletAddress: { type: String },
    transactionHash: { type: String, required: true },

    status: {
      type: String,
      enum: Object.values(TransactionStatus),
      default: TransactionStatus.PENDING,
    },
  },
  { timestamps: true }
);

const TransactionModel = model<TransactionDocument>('Transaction', transactionSchema);
export default TransactionModel;