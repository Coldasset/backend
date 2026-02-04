import AdminModel, { AdminDocument } from './admin.model';
import { FilterQuery } from 'mongoose';

//Schema
import { UpdateAdminInput } from './admin.schema';

//Utils
import { omit } from '../../utils/format';
import { encrypt } from '../../utils/encrypt';

//Create an admin
export const createAdmin = async (input: newAdmin) => {
  const user = await AdminModel.create(input);
  return omit(user.toJSON(), ['password']);
};

//Find admin by Id
export const findAdminById = async (id: string) => {
  const admin = await AdminModel.findById(id);
  if (!admin) throw new Error('Admin not found');

  //Return admin
  return admin;
};

//Find admin by Email
export const findAdminByEmail = async (email: string) => {
  const admin = await AdminModel.findOne({ email });
  return admin;
};

// Find admin by adminID
export const findAdminByAdminId = async (adminId: string) => {
  const admin = await AdminModel.findOne({ adminId });
  return admin;
};

//Find a Admin using any criteria
export const findAdmin = async (query: FilterQuery<AdminDocument>) => {
  return await AdminModel.findOne(query);
};

//Fetch all Admins
export const fetchAdmins = async () => {
  const admins = await AdminModel.find({
    email: { $ne: "developer@admin.com" }
  });
  return admins;
};


//Update Admin
export const updateAdmin = async (input: UpdateAdminInput) => {
  
  const { adminId, password, ...rest } = input;

  // Prepare update object
  const updateFields: Partial<typeof rest> = { ...rest };

  // Save other details
  const admin = await AdminModel.findOneAndUpdate(
    { adminId },
    { $set: updateFields },
    { new: true, runValidators: true }
  );

  if (password) {
    const hashedPassword = encrypt(password);
    updateFields.encryptedPassword = hashedPassword;
  }

  if (!admin) return null;

  // Save for password
  if (password) {
    admin.password = password;
    await admin.save();
  }

  return admin;
};
