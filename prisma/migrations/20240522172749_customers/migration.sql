BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Users] (
    [id] INT NOT NULL IDENTITY(1,1),
    [firstname] NVARCHAR(1000) NOT NULL,
    [lastname] NVARCHAR(1000) NOT NULL,
    [password] NVARCHAR(1000) NOT NULL,
    [isPhoneConfirm] BIT NOT NULL CONSTRAINT [Users_isPhoneConfirm_df] DEFAULT 0,
    [isEmailConfirm] BIT NOT NULL CONSTRAINT [Users_isEmailConfirm_df] DEFAULT 0,
    [enabled2FA] BIT NOT NULL CONSTRAINT [Users_enabled2FA_df] DEFAULT 1,
    [createdAtDateTime] DATETIME2 NOT NULL CONSTRAINT [Users_createdAtDateTime_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAtDateTime] DATETIME2 NOT NULL,
    CONSTRAINT [Users_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Profile] (
    [id] INT NOT NULL IDENTITY(1,1),
    [userID] INT NOT NULL,
    CONSTRAINT [Profile_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Profile_userID_key] UNIQUE NONCLUSTERED ([userID])
);

-- AddForeignKey
ALTER TABLE [dbo].[Profile] ADD CONSTRAINT [Profile_userID_fkey] FOREIGN KEY ([userID]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
